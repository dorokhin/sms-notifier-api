const express = require('express')
const path = require('path');
const router = express.Router();
const SMSController = require('../controllers/SMSController');
const StatusController = require('../controllers/StatusController');

/**
 * @api {post} /sms Send an SMS message
 * @apiGroup SMS
 * @apiParam {String} phone Phone number
 * @apiParam {String} message Message to send
 * @apiParamExample {json} Input
 *      {
 *          "phone": "0601010101",
 *          "message": "Hi !"
 *      }
 * @apiSuccessExample {json} Success
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "message sent"
 *      }
 */
router.post('/sms', SMSController.sendSMS);

/**
 * @api {get} /status Retrieve status information from the SMS gateway
 * @apiGroup Status
 * @apiSuccessExample {json} Success
 *      HTTP/1.1 200 OK
 *      {
 *          "timestamp": 1522613750000,
 *          "is_airplane_mode": false,
 *          "telephony": {
 *              "network_operator_name": "Some operator name",
 *              "sim_state": "ready",
 *              "is_network_roaming": false
 *          },
 *          "battery": {
 *              "status": "charging",
 *              "level": 99
 *          }
 *      }
 */
router.get('/status', StatusController.SMSGatewayStatus);

// Route for documentation
router.use('/docs', express.static(path.join(__dirname, '/../public/docs')));

module.exports = router;