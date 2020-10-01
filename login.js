const express=require('express')
const app=express()
const bcrypt=require('bcrypt')
const users=[]

app.set('view-engine','ejs')
app.use(express.urlencoded({urlencoded: false}))

app.get('/',function(req,res){
    res.render('index.ejs')
})

app.get('/login',function(req,res){
    res.render('login.ejs')
})

app.post('/login',function(req,res){
})

app.get('/register',function(req,res){
    res.render('register.ejs')
})

app.post('/register',async function(Req,res){
    try{
        const hashedpasswrd= await bcrypt.hash(req.body.password,10)
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password: hashedpasswrd
        })
        res.redirect('/login')
    }catch{
        console.log(users)
    }
})

app.listen(3000,function(){
    console.log('Listening at port 3000....!')
})
