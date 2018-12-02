const admin = require('firebase-admin');

module.exports = function(req, res) {
    // Verify user provided a phone number
    if (!req.body.phone)
        return res.status(422).send({ error: 'Bad input' });

    // Format the phone number
    const phone = String(req.body.phone).replace(/[^\d]/g, "");
    
    // Create new user account
    admin.auth().createUser({ uid: phone })
        .then(user => res.send(user))
        .catch(err => res.status(422).send({ error: err }));
    
    // Respond to the user request with creation status
}
