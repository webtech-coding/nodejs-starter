const route=require('express').Router()
const webController=require('./../controller/webController')

route.get('/',webController.getLandingPage)
route.get('/about', webController.getAboutPage)
route.get('/contact', webController.getContactPage)



module.exports=route
