
const db = require('../database/db_config');


exports.emailVerification = (email) => {


    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

exports.emailExists = (email, callback) => {
    db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, res) => {
        console.log(res);
        if (res.length > 0) {
            callback(true);
        }
        else {

            callback(false);
        }
    }
    )

}