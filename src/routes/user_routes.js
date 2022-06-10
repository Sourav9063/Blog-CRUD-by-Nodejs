const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

    res.send('Hello World');
    console.log('user')
});

module.exports = router;