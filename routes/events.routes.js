//const { Router } = require("express")
const express = require("express")
const router = express.Router()
const ApiService = require("../services/api-service")
const ticketApi = new ApiService()


router.get('/main', (req, res, next) => {
    ticketApi.getAllEvents().then((events) => {
        res.render('auth/main', { eventData: events._embedded.venues })
        console.log(events)
    })

})


router.get('/main2', (req, res, next) => {
    console.log('segunda ruta')
})

router.get('/main3', (req, res, next) => {
    console.log('tercera ruta')
})

module.exports = router