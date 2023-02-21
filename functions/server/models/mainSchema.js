const mongoose =require("mongoose")

const orderJouney =mongoose.Schema({
    cusid:{
        type:String,
        required:true
    },
    custelephone:{
        type:String,
        required:true
    },
    destination:{
        type:{},
        required:true
    },
    prepare:{
        type:String
    },
    launchdate:{
        type:String
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }
},
{timestamps:true})
module.exports = mongoose.model("OrderJouney",orderJouney)