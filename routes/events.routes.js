const express = require("express")
const router = express.Router()

router.get('/main', (req, res, next) => {
    console.log('primera ruta')
})

module.exports = router