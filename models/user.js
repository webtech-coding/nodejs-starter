const mongoose=require('./../database/mongoose')

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    }
})

const User=mongoose.model('users',userSchema)
module.exports=User