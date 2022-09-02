const nodemailer = require("nodemailer");
// const SMTPServer = require('smtp')

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            // name:process.env.HOST,
            host: process.env.HOST,
            service: "gmail",
            port: 587,
            secure: true,
            // sendmail: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;