const express = require("express");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => res.send("API Running. . ."));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const cors = require("cors");
app.use(cors());

const nodemailer = require("nodemailer");

app.post("/send", (req, res) => {
    res.send("API Running. . .");

    let output;

    //regular build
    output = `
        <h2>New Octagons Message</h2>
            <p>Name: ${req.body.user.name}</p>
            <p>Email: ${req.body.user.email}</p>
            <br/><p>${req.body.user.message}<br/><br/>
            <br/><br/><em>This is an automated email from octagons.org.</em>`;

    // async..await is not allowed in global scope, must use a wrapper
    async function mailer() {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.aol.com",
            auth: {
                user: "octagons_mailer@aol.com",
                pass: "rbzztwymvvryuixf",
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: "octagons_mailer@aol.com", // sender address
            to: "admin@octagons.org", // list of receivers
            subject: `New Message from ${req.body.user.name}`, // Subject line
            html: output, // html body
        });
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    mailer().catch(console.error);
});
