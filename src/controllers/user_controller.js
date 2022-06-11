const User = require('../models/user_model');
const utils = require('../utils/util_func');
const bcrypt = require('bcrypt');

exports.getUserList = (req, res) => {
    User.getAllUsers((err, users) => {
        console.log(users);
        if (err) {
            //send status code 500 if error
            res.status(500).send(err);
        }
        else {
            res.json(users);
        }
    })
}

exports.createNewUser = async (req, res) => {
    let user = new User(req.body);
    // console.log(req.body.name);
    // console.log(user);
    console.log('check email validation');
    if (utils.emailVerification(user.email)) {
        utils.emailExists(req.body.email,
            async (exists) => {
                if (exists) {
                    console.log('email already exists');
                    res.status(400).send('email already exists. Sign In');
                }
                else {


                    try {

                        const hash = await bcrypt.hash(user.password_hash, 10);
                        user.password_hash = hash;
                        User.createNewUser(user, (err, response) => {

                            if (err) {
                                res.status(500).send(err);
                            }
                            else {
                                res.json(response);
                            }
                        })


                    } catch (error) {
                        res.status(500).send(error);
                    }



                }
            }

        );

        // try {

        //     // const hash = await bcrypt.hash(user.password_hash, 10);
        //     // user.password_hash = hash;
        //     // User.createNewUser(user, (err, response) => {

        //     //     if (err) {
        //     //         res.status(500).send(err.sqlMessage);
        //     //     }
        //     //     else {
        //     //         res.json(response);
        //     //     }
        //     // })


        // } 
        // catch (error) {
        //     res.status(500).send(error);
        // }

    }
    else {
        console.log('email is not valid');
        res.status(400).send('email is not valid');

    }








}


exports.signIn = async (req, res) => {
    console.log(req.body);
    let user = new User(req.body);
    try {
        User.getUserByEmail(user.email, async (err, response) => {

            if (err) {
                res.status(500).send(err);
            }
            else {
                if (response.length > 0) {
                    console.log('user exists');
                    if (await bcrypt.compare(user.password_hash, response[0].password_hash)) {
                        console.log('password is correct');
                        res.json(response);
                    }
                    else {
                        console.log('password is incorrect');
                        res.status(400).send('password is incorrect');
                    }
                }
                else {
                    console.log('user does not exist');
                    res.status(400).send('user does not exist');
                }
            }





        });

    }
    catch (error) {
        res.status(500).send(error);
    }
}