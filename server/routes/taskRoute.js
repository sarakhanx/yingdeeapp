const express = require("express")
const router = express.Router()
const{shelt,create,update,read,remove} = require("../controllers/mainController")


router.get('/shelt',shelt)
router.post('/create',create)
module.exports = router
