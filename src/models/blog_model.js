
const db = require('../database/db_config');


var Blog = (blog) => {
    this.title = blog.title;
    this.id = blog.id;
    this.main = blog.main;
    this.user_id = blog.user_id;
    this.create_date = blog.create_date;


}

Blog.getAllBlogs = (result) => {
    db.query('SELECT * FROM blogs ', (err, res) => {
        if (err) {
            console.log("error on query")
            result(null, err)
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
            result(null, err)
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
            result(null, err)
        }
        else {
            result(null, res)
        }
    }
    )
}

Blog.createNewBlog = (blog, result) => {
    db.query('INSERT INTO blogs SET ?', blog, (err, res) => {
        if (err) {
            console.log("error on query")
            result(null, err)
        }
        else {
            result(null, res)
        }
    }
    )
}






module.exports = Blog;