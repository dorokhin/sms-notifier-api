const router = require('express').Router();
const SMSController = require('../controllers/SMSController');

// SMS
router.post('/sms', SMSController.sendSMS);

module.exports = router;