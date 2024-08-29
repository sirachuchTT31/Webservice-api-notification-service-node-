const emailController = require('../controllers/email.controller');
var router = require('express').Router();

router.post("/send",
    [
        
    ],
    emailController.sendEmail
);



module.exports = router;