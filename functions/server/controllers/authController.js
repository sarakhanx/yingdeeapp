const jwt = require('jsonwebtoken')

exports.login=(req,res)=>{
    const {username,password} = req.body
    if (password === process.env.PASSWORD) {
        const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'7d'})
        return res.json({token,username})
    }else{
        res.status(400).json({error:'รหัสผ่านไม่ถั่วต้มอะ'})
    }
}