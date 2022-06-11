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

    let newBlog = new Blog(req.body);
    newBlog.user_id = req.user.id;
    console.log(newBlog);

    Blog.createNewBlog(newBlog, (err, results) => {
        // console.log(blog);
        if (err) {
            res.send(err);
        }
        else {
            res.json(results);
        }
    }
    )
}

exports.updateBlogByID = (req, res) => {
    req.body.user_id = req.user.id;
    Blog.updateBlogID(req.params.id, req.body, (err, result) => {
        console.log(result);
        if (err) {
            res.send(err);
        }
        else {
            res.json(result);
        }
    }
    )
}




