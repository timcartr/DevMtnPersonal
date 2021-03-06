require('dotenv').config()
const express = require('express')
const axios = require('axios')
const massive = require('massive')
const session = require('express-session')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const AWS = require('aws-sdk')
const app = express()
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const S3 = new AWS.S3()
const { 
    SERVER_PORT, 
    REACT_APP_DOMAIN, 
    REACT_APP_CLIENT_ID, 
    CLIENT_SECRET,
    SESSION_SECRET, 
    CONNECTION_STRING
} = process.env

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// Endpoints
app.get('/api/user-data', ctrl.getUser)
app.get('/api/members', ctrl.getAllMembers)
app.post('/api/logout', ctrl.logout)
app.put('/api/updatePic/:id', ctrl.updatePic)
app.put('/api/updateMember/:id', ctrl.updateMember)
app.put('/api/updateMemberSince/:id', ctrl.updateMemberSince)
app.put('/api/updateMemberPhone/:id', ctrl.updateMemberPhone)
app.put('/api/updateMembership/:id', ctrl.updateMembership)
app.delete('/api/deleteMember/:id', ctrl.deleteMember)

//Auth0 Login
app.get('/auth/callback', async (req,res) => {
    
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.PROTOCOL}://${req.headers.host}`
    }

    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    
    const db = req.app.get('db')
    let { sub, email, name, picture } = resWithUserData.data
    let nameSplit = name.split(" ")
    let firstName = nameSplit[0]
    let lastName = nameSplit[1]

    let foundUser = await db.find_user([email])
    // console.log(foundUser[0])
    if(!foundUser[0]){
    let createdUser = await db.create_member([firstName, lastName,sub,email,picture])
    let updateMemeberships = await db.create_membership([createdUser[0].member_id])
    req.session.user = createdUser[0]
    res.redirect(`/#/signup`)
    } else if(foundUser[0].membership_level !== 'Admin'){
    req.session.user = foundUser[0];
    res.redirect(`/#/member/${req.session.user.member_id}`)
    } else if(foundUser[0].membership_level === 'Admin'){
        req.session.user = foundUser[0];
        res.redirect(`/#/admin/members`)
        }
})

// Amazon S3 Uploader
app.post('/api/s3', (req, res) => {
    const photo = req.body;
    const buf = new Buffer(photo.file.replace(/^data:image\/\w+;base64,/, ''), 'base64');

    const params = {
        Bucket: process.env.AWS_BUCKET,
        Body: buf,
        Key: photo.filename,
        ContentType: photo.filetype,
        ACL: 'public-read',
    };

    S3.upload(params, (err, data) => {
        let response, code;
        if (err) {
            response = err;
            code = 500;
        } else {
            response = data;
            code = 200;
        }
        res.status(code).send(response);
    });
});

// Stripe
app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    const convertedAmt = req.body.amount * 10

    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
}, function(err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
});
});


massive(CONNECTION_STRING).then( connection => {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => {
        console.log(`Dinos still live on port ${SERVER_PORT}`)
    })
})