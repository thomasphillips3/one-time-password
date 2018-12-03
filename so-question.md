# Importing string values to pass to an API call in JavaScript

I have a ([Twilio][1]) API call which requires credentials **`accountSid`** and **`authToken`**. 

<hr>

**`twilio.js`**

    const twilio = require('twilio');
    const accountSid = require('./auth/twilio_credentials');
    const authToken = require('./auth/twilio_credentials');

    console.log('accountSid: ' + accountSid);
    console.log('authToken: ' + authToken);

    module.exports = new twilio.Twilio(accountSid, authToken);

<hr>

For security, instead of pasting the values directly into code, I have them in separate file. The credentials are used in the file at the same level as the **`auth`** folder

**`auth/twilio_credentials.js`**

    module.exports = accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    module.exports = authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

<hr>

From the console logs (and using **`typeof`**), I was able to verify that the strings are being imported properly to that point, but when I run the code, I get **`throw new Error('accountSid is required');`**. However, it works when I paste the values directly into the file. 

I feel like this is a wonky JavaScript thing that I'm missing. What's the difference between importing the string value from a different file, versus directly using a hard-coded value?

  [1]: https://twilio.com/