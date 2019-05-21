const express=require('express') //NODE FRAMEWORK
const path=require('path') //NODE PATH
const bodyParser=require('body-parser') //BODY PARSER MIDDLEWARE

const app=express() //APP INIT

require('./database/mongoose')//MONGODB

//VIEW ENGINE
const viewPath=path.join(__dirname,'views')
app.set('view engine','ejs')
app.set('views',viewPath)

//PUBLIC PATH
const publicPath=path.join(__dirname,'public/')
app.use(express.static(publicPath))

//BODY PARSER
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//LOCALS
app.use((req,res,next)=>{
    res.locals.isAdmin=false
    res.locals.error=null
    next()
})

//ROUTES
const webRoutes=require('./routes/web')
app.use(webRoutes)


//404 ROUTE
app.get('*',(req,res)=>{
    res.send('404 ! The page you are looking for does not exist.')
})

//SERVER
const PORT=3000
app.listen(PORT,()=>{
    console.log('App started')
})