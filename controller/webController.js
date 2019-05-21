const {body, validationResult}=require('express-validator/check')

getLandingPage=(req,res)=>{
    res.render('index')
}
getAboutPage=(req,res)=>{
    res.render('about')
}
getContactPage=(req,res)=>{
    res.render('contact')
}

module.exports={getLandingPage,getAboutPage,getContactPage}