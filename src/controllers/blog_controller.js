const Blog = require('../models/blog_model');



exports.getBlogList = (req, res) => {

    // console.log('getBlogList');
    Blog.getAllBlogs((err, blogs) => {
        console.log(blogs);
        if (err) {
            res.send(err);
        }
        else {
            res.json(blogs);
        }
    })
}