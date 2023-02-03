const slugify = require("slugify")
const OrderJouneys = require("../models/mainSchema")
const { v4: uuidv4 } = require('uuid');


exports.create=(req,res)=>{
    const {cusid,custelephone,destination,prepare,launchdate} = req.body
    let slug = slugify(cusid)

    if(!slug)slug=uuidv4();
    switch(true){
        case !cusid:
            return res.status(400).json({error:"กรุณาใส่ชื่อลูกค้าด้วย"})
            break;
        case !custelephone:
            return res.status(400).json({error:"ใส่เบอร์โทรลูกค้าด้วย"})
            break;
        case !destination:
            return res.status(400).json({error:"ใส่สถานที่รับ/จัดส่งด้วย"})
            break;
        case !launchdate:
            return res.status(400).json({error:"ใส่วันผลิตด้วย"})
            break;
    }
    OrderJouneys.create({cusid,custelephone,destination,prepare,launchdate,slug},(err,orderdetail)=>{
        if(err){
            res.status(400).json({error:"bad request"})
        }
        res.json(orderdetail)
    })
    } 
    
