const Blog = require('../models/blog_model');



exports.getBlogList = (req, res) => {

    Blog.getAllBlogs((err, blogs) => {
        console.log(blogs);
        if (err) {

            res.status(500).send(err);

        }
        else {
            res.json(blogs);
        }
    })
}

exports.getBlogLatest10 = (req, res) => {


    Blog.getLatest10Blogs((err, blogs) => {
        console.log(blogs);
        if (err) {
            res.send(err);
        }
        else {
            res.json(blogs);
        }
    })
}

exports.getBlogById = (req, res) => {


    Blog.getBlogById(req.params.id, (err, blog) => {
        console.log(blog);
        if (err) {
            res.send(err);
        }
        else {
            res.json(blog);
        }
    }
    )
}

exports.createNewBlog = (req, res) => {
    // const blog = new Blog(req.body);
    console.log(req.body);

    Blog.createNewBlog(req.body, (err, blog) => {
        console.log(blog);
        if (err) {
            res.send(err);
        }
        else {
            res.json(blog);
        }
    }
    )
}




