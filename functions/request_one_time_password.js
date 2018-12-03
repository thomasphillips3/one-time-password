const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function(req, res) {
    if(!req.body.phone) return (res.status(422).send({ error: 'Please provide valid phone number' }));

    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    console.log("phone:" + phone);

    admin.auth().getUser(phone)
        .then(userRecord => {
            const code = Math.floor(Math.random() * 8999 + 1000);
            twilio.messages.create({
                body: 'Here\'s your code: ' + code,
                to: phone,
                from: '+12489655397'
            }, (err) => {
                if(err) { return res.status(422).send(err); }

                admin.database().ref('users/' + phone)
                    .update({ code: code , codeValid: true }, () => {
                        res.send({ success: true });
                    });
            })
        })
        .catch((err) => {
            res.status(422).send({ error: 'User not found' + err });
        });

}