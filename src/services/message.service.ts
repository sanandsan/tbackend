
import nodemailer, { Transporter } from 'nodemailer';

import smtpTransport from 'nodemailer-smtp-transport'
export class MailService{


    createTransport():Transporter{
        const mailTransport=nodemailer.createTransport(smtpTransport({service:process.env.SERVICE,host:process.env.HOST,   auth: {
                user:process.env.EMAIL,
                pass: process.env.PASSWORD
              }}))
              return mailTransport;
    }
  async  sendMail(message:message){
        var mailOptions = {
              from: process.env.FROM,
              to: message.to,
              subject: process.env.SUBJECT,
              text: message.text
            };

            try{
        const transport= this.createTransport();
       await transport.sendMail(mailOptions)
return "sent successfully"}
catch(err)
{
return err;
}
            
    }
}
// var nodemailer = require('nodemailer');



// var smtpTransport = require('nodemailer-smtp-transport');

// var transporter = nodemailer.createTransport(smtpTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   auth: {
//     user: 'somerealemail@gmail.com',
//     pass: 'realpasswordforaboveaccount'
//   }
// }));

// var mailOptions = {
//   from: 'somerealemail@gmail.com',
//   to: 'friendsgmailacc@gmail.com',
//   subject: 'Sending Email using Node.js[nodemailer]',
//   text: 'That was easy!'
// };


interface message{
      to: string,
      text: string
    };
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// }); 