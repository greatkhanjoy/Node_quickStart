const express = require('express');
const Router = express.Router();
const {sendEmail, sendEmailEtherial} = require('../Controllers/EmailController');


Router.route('/').get(sendEmail)
Router.route('/e').get(sendEmailEtherial)

module.exports = Router;