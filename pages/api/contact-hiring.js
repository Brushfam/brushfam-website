export default async function (req, res) {
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
        to: ["nameless.endless@727.ventures", "daryna@727.ventures"],
        subject: `Blockchain developer`,
        text: req.body.message,
        html: "" +
            "<div>" +
                "<p>Hiring form:</p>" +
                "<p>Name: " + req.body.name + "</p>" +
                "<p>Lastname: " + req.body.lastname + "</p>" +
                "<p>Country: " + req.body.country + "</p>" +
                "<p>LinkdIn: " + req.body.ln + "</p>" +
                "<p>Message: " + req.body.message + "</p>" +
            "</div>",
        attachments: [
            {
                filename: "Attachment",
                path: req.body.file.files.file,
            }
        ]
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

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb',
        },
    },
}
