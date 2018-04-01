const axios = require('axios');
const validator = require('validator');
const qs = require('qs');

const sendSMS = async (req, res) => {
    const SMSUrl = 'http://' + process.env.MOBILE_PHONE_IP_ADDR + ':8080/v1/sms';
    
    if(req.body.phone && req.body.message) {
        
        if(validator.isMobilePhone(req.body.phone, process.env.LOCALE)) {
            try {
                let response = await axios.post(SMSUrl, qs.stringify({
                    phone: req.body.phone,
                    message: validator.trim(req.body.message)
                }));

                if(response.status === 200 && response.data === 'OK') {
                    res.json({message: "Message sent"});
                }
                else {
                    res.status(500).json({error: "Unexpected error"});
                }

                console.log(response.statusCode, response.data);
            }
            catch(e) {
                res.status(500).json({
                    error: "Error while sending SMS to SMS Gateway"
                });
            }
        }
        else {
            res.status(400).json({
                error: "Invalid phone number for locale " + process.env.LOCALE
            });
        }
    }
    else {
        res.status(400).json({
            error: "You must specify a phone number and a message"
        });
    }
}
module.exports.sendSMS = sendSMS;