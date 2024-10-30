const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: "7eeac6002@smtp-brevo.com",
            pass: "asMUAWFpnZzwDmg9",
        },
    });

    const otp = Math.floor(Math.random()*10000);

    const info = await transporter.sendMail({
        from: '"devIQ" <contact.dcdeveloper@gmail.com>', // sender address
        to: "divyam.thakur149193@gmail.com", // list of receivers
        subject: "OTP from devIQ", // Subject line
        html: `Your OTP is here :<b>${otp}</b>`, // html body
    })

    console.log("Message Sent: %s",info.messageId);
    res.json(info);
}

module.exports = sendMail;