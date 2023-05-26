const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname smtp.live.com //smtp-mail.outlook.com
  //secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  //tls: {
  //ciphers:'SSLv3'
  //},
  secure: false,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (data) => {
  try {
    let sendResult = await transporter.sendMail({
      from: "INDIA INTERNATIONAL AIRPORT <adairfeedbackdoc@hotmail.com>",
      to: `${data.userEmail}`,
      subject: `Feedback Response Recorded Successfully`,
      // text:`Welcome to Airport`
      text: `Your Feedback for ${data.type} Submitted

      Dear ${data.userName},
      
      Your Feedback for ${data.type} has been submitted Successfully. We are greatfull that you share your valueable feedback so that we can improve our facilities and provide best facilities to passengers
      
      
      
     
      
      Please note that this is auto generated mail please do not respond back on this mail
      
      
      Thank you 
      
      Best regards,
      India International Airport  Team`,
      html: `<div><h1>Feedback Response Recorded Successfully</h1>
      <p>
        Dear ${data.userName},
      </p>
      <p>
        Your Feedback for ${data.type} has been submitted Successfully. We are greatfull that you share your valueable feedback so that we can improve our facilities and provide best facilities to passengers
      </p>
     
      
      <p>
        Please note that this is auto generated mail please do not respond back on this mail
      </p>
      
      <p>
        Thank you for your understanding and continued support.
      </p>
      <p>
        Best regards,<br>
        India International Airport Team
      </p></div>`,
    });
    //   console.log(sendResult);
  } catch (err) {
    console.log(err);
  }
};



module.exports = { sendEmail };