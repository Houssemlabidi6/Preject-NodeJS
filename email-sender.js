var nodemailer = require("nodemailer");

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "houssemlabidi6@gmail.com",
    pass: "password",
  },
});

// Setup email data
const mailOptions = {
  from: "houssemlabidi6@gmail.com",
  to: "houssemlabidi6@gmail.com",
  subject: "Sending Email using Node.js",
  text: "hello !",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
