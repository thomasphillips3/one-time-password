const twilio = require('twilio');
const { accountSid, authToken } = require('./auth/twilio_credentials');


console.log('accountSid: ' + accountSid);
console.log('authToken: ' + authToken);

module.exports = new twilio.Twilio(accountSid, authToken);