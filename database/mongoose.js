const mongoose=require('mongoose')
const database=require('./../config')

mongoose.connect(database.db,{useNewUrlParser:true})

module.exports=mongoose