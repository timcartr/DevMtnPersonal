require('dotenv').config()
const express = require('express')
const axios = require('axios')
const massive = require('massive')
const session = require('express-session')
const bodyParser = require('body-parser')

const ctrl = require('./controller')

const app = express()
app.use(bodyParser.json())

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
app.get('/api/user-data', ctrl.getUser)
app.get('/api/members', ctrl.getAllMembers)
app.put('/api/updateMember/:id', ctrl.updateMember)
app.put('/api/updateMembership/:id', ctrl.updateMembership)
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
    // console.log(foundUser[0])
    if(foundUser[0].membership_level === 'Admin'){
    req.session.user = foundUser[0];
    
    res.redirect(`/#/admin/members`)
    } else if(foundUser[0].type !== 'Admin'){
    req.session.user = foundUser[0];

    res.redirect(`/#/member/${req.session.user.member_id}`)
    } else {
        let createdUser = await db.create_member([name,sub,email,picture])
        req.session.user = createdUser
        res.redirect(`/#/member/${req.session.user.member_id}`)
    }
})



massive(CONNECTION_STRING).then( connection => {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => {
        console.log(`Dinos still live on port ${SERVER_PORT}`)
    })
})