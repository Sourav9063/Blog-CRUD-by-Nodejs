
const db = require('../database/db_config');


var Blog = function (blog) {
    this.title = blog.title;
    this.blogid = blog.blogid;
    this.main = blog.main;
    this.user_id = blog.user_id;
    this.create_date = blog.create_date;

}

Blog.getAllBlogs = (result) => {
    db.query('SELECT * FROM blogs ', (err, res) => {
        if (err) {
            console.log("error on query")
            result(err, null)
        }
        else {
            result(null, res)
        }


    })
}
Blog.getLatest10Blogs = (result) => {
    db.query('SELECT * FROM blogs ORDER BY create_date DESC LIMIT 10', (err, res) => {
        if (err) {
            console.log("error on query")
            result(err, null)
        }
        else {
            result(null, res)
        }
    }
    )
}
Blog.getBlogById = (id, result) => {
    db.query(`SELECT * FROM blogs WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error on query")
            result(err, null)
        }
        else {
            result(null, res)
        }
    }
    )
}

Blog.createNewBlog = (blog, result) => {

    console.log(blog);
    db.query('INSERT INTO blogs SET ?', blog, (err, res) => {
        if (err) {
            console.log("error on query")
            result(err, null)
        }
        else {
            result(null, res)
        }
    }
    )
}

Blog.updateBlogID = (id, blog, result) => {
    db.query('UPDATE blogs INNER JOIN users ON users.id=blogs.user_id SET ? WHERE blogs.blogid=?', [blog, id], (err, res) => {
        if (err) {
            console.log("error on query")
            result(err, null)
        }
        else {
            result(null, res)
        }
    }
    )
}






module.exports = Blog;