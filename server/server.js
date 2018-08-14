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
app.put('/api/updateMemberAdmin/:id', ctrl.updateMemberAdmin)
app.put('/api/adminUpdateMembershipLevel/:id', ctrl.adminUpdateMembership)
app.delete('/api/deleteMember/:id', ctrl.deleteMember)
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
    if(!foundUser[0]){
    let createdUser = await db.create_member([name,sub,email,picture])
    let updateMemeberships = await db.create_membership([createdUser[0].member_id])
    req.session.user = createdUser[0]
    res.redirect(`/#/member/${req.session.user.member_id}`)
    } else if(foundUser[0].membership_level !== 'Admin'){
    req.session.user = foundUser[0];
    res.redirect(`/#/member/${req.session.user.member_id}`)
    } else if(foundUser[0].membership_level === 'Admin'){
        req.session.user = foundUser[0];
        res.redirect(`/#/admin/members`)
        }
})



massive(CONNECTION_STRING).then( connection => {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => {
        console.log(`Dinos still live on port ${SERVER_PORT}`)
    })
})