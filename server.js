var smtp = require('./smtpconnection');
var mailoptions = require('./mailoptions')
var cors = require("cors");
var express = require('express');

var app = express()
app.use(express.json())
app.use(cors({origin:"https://balaganesansr.github.io"}))
app.get('/',(req,res)=>{
    res.send('<h1>Working 😉</h1>')
})
app.post('/sendMail' ,(req,res)=>{
    console.log("Endpoint Called : /sendMail")
    try{
        const {name , customerMail } = req.body;
        var sub = `Quix:Mail From ${customerMail}`;
        var content = `NAME : ${name}\nMAIL : ${customerMail}\n`
        content = content + req.body.content;

        mailoptions.mailoptions["subject"] = sub;
        mailoptions.mailoptions["text"] = content;

        smtp.transport.sendMail(mailoptions.mailoptions, (error,info)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.send(info.response)
        }
    })
    }catch{
        res.send("error")
    }
    
})

app.listen(2000 , ()=>{
    console.log("SMTP Started at 2000")
})