const User = require('../models/user_model');
const utils = require('../utils/util_func');
const bcrypt = require('bcrypt');

const jwtfunc = require('../auth/jwt_auth_func');
const { json } = require('body-parser');

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

exports.getUserByEmail = (req, res) => {
    const email = req.user.email;
    User.getUserByEmail(email, (err, user) => {
        if (err) {
            //send status code 500 if error
            res.status(500).send(err);
        }
        else {
            if (user.length > 0) { res.status(200).json(user); }
            else { res.status(404).send('user not found'); }
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
                                User.getUserByEmail(user.email, (err, response) => {
                                    if (err) {
                                        res.status(500).send(err);
                                    }
                                    else {
                                        const token = jwtfunc.auth_token_create(response[0]);
                                        res.status(200).send({ access_token: token, user_id: response[0].id });
                                    }
                                })


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
    console.log(process.env.JWT_KEY);
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



                        const token = jwtfunc.auth_token_create(response[0]);



                        // res.status(200).json(response[0].access_token = token);
                        res.status(200).json({ 'access_token': token, 'user_id': response[0].id });
                    }
                    else {
                        console.log('password is incorrect');
                        res.status(401).send('password is incorrect');
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


exports.updateUser = (req, res) => {
    User.updateInfo(req.user.id, req.body, (err, response) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            // res.json(response);
            const newUser = Object.assign(req.user, req.body);
            const token = jwtfunc.auth_token_create(newUser);
            newUser.authorization = token;
            res.status(200).json(newUser);
        }
    })
}