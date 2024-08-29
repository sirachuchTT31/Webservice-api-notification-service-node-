require('dotenv').config()

module.exports = {
    Config: {
        Email: {
            Sender: {
                email: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASS
            }
        }
    }
}