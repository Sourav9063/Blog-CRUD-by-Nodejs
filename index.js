const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Hello World');
});

const blogsRoutes = require('./src/routes/blog_routes');
app.use('/api/v1/blogs', blogsRoutes);

app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});


app.listen(port, () => {
    console.log(`Express is running at port ${port}`);
});