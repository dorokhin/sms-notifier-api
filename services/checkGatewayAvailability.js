const axios = require('axios');

const checkGatewayAvailability = async () => {
    const url = 'http://' + process.env.MOBILE_PHONE_IP_ADDR + ':' + process.env.MOBILE_PHONE_PORT;
    try {
        let response = await axios.get(url);
        return response.status === 200;
    }
    catch(e) {
        return false;
    }
}

module.exports = checkGatewayAvailability;