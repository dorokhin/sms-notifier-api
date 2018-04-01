const axios = require('axios');
const checkGatewayAvailability = require('../services/checkGatewayAvailability');

const SMSGatewayStatus = async (req, res) => {
    if(await checkGatewayAvailability()) {
        const gatewayStatusUrl = 'http://' + process.env.MOBILE_PHONE_IP_ADDR + ':' + process.env.MOBILE_PHONE_PORT + '/v1/device/status';
        try {
            let response = await axios.get(gatewayStatusUrl);
            if(response.status === 200) {             
                res.json(response.data);
            }
            else {
                res.status(500).json({error: "Unexpected error"});
            }
        }
        catch(e) {
            res.status(500).json({error: "Error while contacting SMS Gateway"});
        }
    }
    else {
        res.status(500).json({
            error: "SMS Gateway is unreachable"
        });
    }
}
module.exports.SMSGatewayStatus = SMSGatewayStatus;