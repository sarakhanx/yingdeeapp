const express = require("express")
const router = express.Router()
const{shelt,create,update,read,remove} = require("../controllers/mainController")


router.get('/shelt',shelt)
router.post('/create',create)
router.get('/shelt/:slug',read)

module.exports = router;
