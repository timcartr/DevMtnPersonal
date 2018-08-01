require('dotenv').config()
const express = require('express')
const axios = require('axios')
const massive = require('massive')
const session = require('express-session')

const ctrl = require('./controller')

const app = express()

const { 
    SERVER_PORT, 
    REACT_APP_DOMAIN, 
    REACT_APP_CLIENT_ID, 
    CLIENT_SECRET,
    SESSION_SECRET, 
    CONNECTION_STRING
} = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// Endpoints
app.get('/auth/callback', async (req,res) => {
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}`
    }

    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    
    const db = req.app.get('db')
    let { sub, email, name, picture } = resWithUserData.data

    let foundUser = await db.find_user([sub])
    if(foundUser[0]){
    req.session.user = foundUser[0];
    console.log(req.session.user)
    
    res.redirect('/#/admin/members')
    } else {
        let createdUser = await db.create_member([name,sub,email,picture])
        req.session.user = createdUser
        res.redirect('/#/admin/members')
    }
})

app.get('/api/user-data', (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('Nice try sucka!')
    }
})


massive(CONNECTION_STRING).then( connection => {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => {
        console.log(`Dinos still live on port ${SERVER_PORT}`)
    })
})