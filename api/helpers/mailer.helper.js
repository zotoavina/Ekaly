var nodemailer = require('nodemailer');
var dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  port: 465,
  // service: 'gmail',
  host: "smtp.gmail.com",
  auth: {
    user:'ekalyapp@gmail.com',
    pass: 'meanEkalyProject'
  },
  secure: true,
});


function sendMail(mailOptions){
  mailOptions.from =  'ekalyapp@gmail.com';
  mailOptions.subject =  'Livraison Commande';
  mailOptions.text =  'Votre commande est en cours de livraison';
  console.log(process.env.MAIL_USER);
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// app.get("/send/mail", (req, res) => {
//   var mailOptions = {
//     to : "zotoavinanantenaina@gmail.com"
//   };
//   mailer.sendMail(mailOptions);
//   res.json({message: "OK"});
// })


module.exports = {
  sendMail
}
