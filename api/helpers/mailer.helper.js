var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  port: 465,
  // service: 'gmail',
  host: "smtp.gmail.com",
  auth: {
    user: 'ekalyapp@gmail.com',
    pass: 'meanEkalyProject'
  },
  secure: true,
});


var mailOptions = {
  from: 'ekalyapp@gmail.com',
  to: 'zotoavinanantenaina@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


function sendMail(){
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  sendMail
}
