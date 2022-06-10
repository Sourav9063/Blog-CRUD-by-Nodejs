const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog_api_database'
});

connection.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');

});

module.exports = connection;