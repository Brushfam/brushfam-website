
export default function (req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'nameless.brushfam@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    })

    const mailData = {
        from: 'nameless.brushfam@gmail.com',
        to: 'nameless.endless@727.ventures',
        subject: `Message From ${req.body.email}`,
        text: req.body.message,
        html: "<div>" + req.body.message + "</div>"
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
    res.send()
}