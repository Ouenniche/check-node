var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'panambons@gmail.com',
      pass: 'kkdkldjdjdkelw'
    }
  });
  
  var mailOptions = {
    from: 'panambons@gmail.com',
    to: 'abidli.hajer@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });