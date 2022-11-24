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
// events info
router.get("/events/:id", (req, res, next) => {
    const { id: events_id } = req.params
    ticketApi
        .getAllEvents(events_id)
        .then(events => res.render('events/main', { events }))
        .catch(err => console.log(err))
})
module.exports = router