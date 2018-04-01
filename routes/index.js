const router = require('express').Router();
const SMSController = require('../controllers/SMSController');
const StatusController = require('../controllers/StatusController');

// SMS
router.post('/sms', SMSController.sendSMS);

// Status
router.get('/status', StatusController.SMSGatewayStatus)

module.exports = router;