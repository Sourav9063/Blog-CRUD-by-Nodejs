const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Hello World');
});

const blogsRoutes = require('./src/routes/blog_routes');
app.use('/api/v1/blogs', blogsRoutes);

const usersRoutes = require('./src/routes/user_routes');
app.use('/api/v1/users', usersRoutes);


app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});


app.listen(port, () => {
    console.log(`Express is running at port ${port}`);
});