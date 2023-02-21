const express = require("express")
const router = express.Router()
const{shelt,create,taskUpdate,read,taskRemove} = require("../controllers/mainController")


router.get('/shelt',shelt)
router.post('/create',create)
router.get('/shelt/:slug',read)
router.delete('/shelt/:slug',taskRemove)
router.put('/shelt/:slug',taskUpdate)

module.exports = router;
