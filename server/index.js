require('dotenv').config()
const express = require('express')
const axios = require('axios')
const massive = require('massive')

const ctrl = require('./controller')

const app = express()

// Endpoints

const { 
    SERVER_PORT, 
    REACT_APP_DOMAIN, 
    REACT_APP_CLIENT_ID, 
    CLIENT_SECRET, 
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then( connection => {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => {
        console.log(`Dinos still live on port ${SERVER_PORT}`)
    })
})