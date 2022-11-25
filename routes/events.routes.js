//const { Router } = require("express")
const express = require("express")
const router = express.Router()
const ApiService = require("../services/api-service")
const ticketApi = new ApiService()

router.get('/main', (req, res, next) => {
    ticketApi.getAllEvents().then((events) => {
        res.render('user/main', { eventData: events._embedded.venues })
        console.log('primera ruta')
    })

})

router.get('/main2', (req, res, next) => {
    ticketApi.getId().then((venues) => {
        res.render('user/main2', { venue: venues._embedded.venues })
        console.log('segunda ruta')
    })
})

router.get('/main3', (req, res, next) => {
    ticketApi.getAllEvents().then((events) => {
        res.render('user/main3', { eventData: events._embedded.attractions })
    })
    console.log('tercera ruta')
})

module.exports = router