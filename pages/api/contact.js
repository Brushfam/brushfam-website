export default async function contactHandler(req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "nameless.brushfam@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "nameless.brushfam@gmail.com",
    to: ["nameless.endless@727.ventures", "info@brushfam.io"],
    subject: `Message From ${req.body.email}`,
    text: req.body.message,
    html: "<div>" + req.body.message + "</div>",
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200);
  res.send();
}
