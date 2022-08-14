
const db = require('../database/db_config');


var Blog = function (blog) {
    this.title = blog.title;
    this.blogid = blog.blogid;
    this.main = blog.main;
    this.user_id = blog.user_id;
    this.create_date = blog.create_date;

}

Blog.getAllBlogs = (result) => {
    db.query('SELECT blogs.title, blogs.blogid, blogs.user_id, blogs.main, blogs.create_date, users.id,users.name,users.email FROM `blogs` INNER JOIN users ON users.id=blogs.user_id ORDER BY create_date DESC ', (err, res) => {
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
    db.query(`SELECT * FROM blogs WHERE blogid = '${id}'`, (err, res) => {
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

Blog.getBlogsByWriterEmail = (email, result) => {
    db.query(`SELECT  blogs.title, blogs.main, blogs.blogid,blogs.create_date,blogs.user_id FROM blogs JOIN users ON  blogs.user_id= users.id WHERE users.email='${email}'`, (err, res) => {
        if (err) {
            console.log("error on query Email")
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

Blog.updateBlogID = (blogid, userid, blog, result) => {

    db.query(`UPDATE blogs  SET ? WHERE blogs.blogid='${blogid}' AND user_id='${userid}'`, blog, (err, res) => {
        if (err) {
            console.log("error on query update")
            result(err, null)
        }
        else {
            result(null, res)
        }
    }
    )
}

Blog.deleteBlogById = (user_id, blogid, result) => {
    db.query(`DELETE FROM blogs WHERE user_id = ${user_id} AND blogid = ${blogid}`, (err, res) => {
        if (err) {
            console.log("error on deleting")
            result(err, null)
        }
        else {
            result(null, res)
        }
    }
    )
}







module.exports = Blog;