
const db = require('../database/db_config');


var Blog = (blog) => {
    this.title = blog.title;
    this.id = blog.id;
    this.main = blog.main;
    this.user_id = blog.user_id;
    this.create_date = blog.create_date;


}

Blog.getAllBlogs = (result) => {
    db.query('SELECT * FROM blogs', (err, res) => {
        if (err) {
            console.log("error on query")
            result(null, err)
        }
        else {
            result(null, res)
        }


    })
}
module.exports = Blog;