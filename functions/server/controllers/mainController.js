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
            res.status(400).json({error:"Slug ซ้ำกัน แจ้งเตือนนี้มาจาก mainController"})
        }
        res.json(orderdetail)
    })
    }
    exports.shelt=(req,res)=>{
        OrderJouneys.find({}).exec((err,orderdetail)=>{
            res.json(orderdetail)
        })
    }

    exports.read = (req,res)=>{
        const {slug} = req.params
        OrderJouneys.findOne({slug}).exec((err,orderdetail)=>{
            res.json(orderdetail)
        })
    }

    exports.taskRemove =(req,res)=>{
        const {slug} = req.params
        OrderJouneys.findOneAndRemove({slug}).exec((err,orderdetail)=>{
            if(err) console.log(err)
            res.json({
                message:"delete completed!!"
            })
        })
    }

    exports.taskUpdate=(req,res)=>{
        const {slug} = req.params
        const {cusid,custelephone,destination,prepare,launchdate} = req.body
        OrderJouneys.findOneAndUpdate({slug},{cusid,custelephone,destination,prepare,launchdate},{new:true}).exec((err,orderdetail)=>{
             if(err) console.log(err)
             res.json(orderdetail)
        })
    }