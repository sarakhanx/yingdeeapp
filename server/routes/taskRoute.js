const express = require("express")
const router = express.Router()
const{create,update,read,remove} = require("../controllers/mainController")

router.post('/create',create)
module.exports = router