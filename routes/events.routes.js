const express = require("express")
const router = express.Router()

router.get('./main', (req, res, next) => {
    console.log('primera ruta')
})

router.get('./main2', (req, res, next) => {
    console.log('segunda ruta')
})

router.get('./main3', (req, res, next) => {
    console.log('tercera ruta')
})

module.exports = router