const express = require("express")
const router = express.Router()
const axios = require("axios")
//axios necesario?


const ApiService = require('../services/api-service');
const ticketApi = new ApiService()

// ----GET----
router.get('/api-service', (req, res, next) => {

    ticketApi
        .getAllEvents
        .then()
        .catch()
    console.log('hola mundo')
})

module.exports = router