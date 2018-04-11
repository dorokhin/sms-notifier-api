const util = require('util');
const fs = require('fs');

// Promisifying
fs.openAsync = util.promisify(fs.open);
fs.writeAsync = util.promisify(fs.write);
fs.readFileAsync = util.promisify(fs.readFile);
fs.closeAsync = util.promisify(fs.close);

const log = async (ip, phone, message) => {
    let fd;
    try {
        fd = await fs.openAsync(process.env.SMS_LOG_PATH || 'sms.log', 'a+');
        let now = new Date();
        let logLine = now.toDateString() + ' ' + now.toLocaleTimeString() + ' - ' + ip + ' - ' + phone + ' - ' + message.replace('\n', ' ') + '\r\n';
        await fs.writeAsync(fd, logLine, null, 'utf8');
        await fs.closeAsync(fd);
    }
    catch(e) {
        console.error('Error while writing to sms.log file', e);
    }    
}
module.exports.log = log;

const getLogs = async () => {
    let logs;
    try {
        logs = await fs.readFileAsync(process.env.SMS_LOG_PATH || 'sms.log', 'utf8');        
        return logs;
    }
    catch(e) {
        console.error("Error while reading sms.log file");
        return null;
    }
}
module.exports.getLogs = getLogs;