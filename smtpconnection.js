var nodemailer = require('nodemailer');
require('dotenv').config()
module.exports.transport = nodemailer.createTransport(
    {
        host : "smtp-relay.brevo.com" ,
        port : 587 ,
        auth : {
            user : process.env.SMTP_SERVER_MAIL ,
            pass : process.env.API_KEY_FOR_SMTP ,
        }
    }
)
