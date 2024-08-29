let nodemailer = require('nodemailer');
const { Config } = require('../constant/Config')
exports.sendEmail = async (req, res) => {
    try {
        // console.log(req)
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({
        //         statusCode: 400,
        //         message: "Bad Request",
        //         errors: errors.array(),
        //     });
        // }
        const { service, toEmail, subject, text } = req.body;
        const mailConfig = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            service,
            auth: {
                user: Config.Email.Sender.email.trim(),
                pass: Config.Email.Sender.pass.trim()
            }
        });
        const mailOptions = {
            from: Config.Email.Sender.email,
            to: toEmail,
            subject: subject,
            text: text
        }
        const responseSendEmail = await mailConfig.sendMail(mailOptions).then((value) => {
            return {
                statusCode: 200,
                result: value
            }
        }).catch((error) => {
            return {
                statusCode: 500,
                error
            }
        })

        console.log(responseSendEmail)

        return res.json(responseSendEmail)
    }
    catch (err) {
        res.status(500).json({ statusCode: 500, error: err })
        console.log(`error : ${JSON.stringify(err)}`)
    }
}