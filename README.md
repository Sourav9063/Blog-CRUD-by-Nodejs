# Blog-CRUD-by-Nodejs

[DEMO](https://drive.google.com/file/d/1qKE_CseIC8Mg9qrg2zpT2GJ0nbqOPCMW/view?usp=share_link)
![Screenshot 2022-11-19 212114](https://user-images.githubusercontent.com/53114581/202858064-3a594637-0e01-4142-a17b-211b5866d448.jpg)![Screenshot 2022-11-19 212345](https://user-images.githubusercontent.com/53114581/202858172-af9b10d7-1c8f-4e56-857b-86be59085c47.jpg)


Blog app using mysql and express. Authorization uses jsonwebtoken and bcrypt.

Mysql database is here [a link](https://github.com/Sourav9063/Blog-CRUD-by-Nodejs/blob/main/src/database/blog_api_database.sql )

Postman collection is here [a link](https://github.com/Sourav9063/Blog-CRUD-by-Nodejs/blob/main/NodeJsBlogAPI.postman_collection.json)

I used xampp to start my database with this file [a link](https://github.com/Sourav9063/Blog-CRUD-by-Nodejs/blob/main/src/database/blog_api_database.sql )

Then ```npm i``` and ```npm start``` command to start the server.

 For postman:
  Go to http://localhost:5000/api/v1/users/signup to signup and this will give you access token.
  User this token to create read(all blogs, latest 10 blogs, myblogs, specific writer's blog) update delete blogs and update profile info.



Then ```cd news-blog``` , ```npm i``` and ```npm start``` command to start react client. 
http://localhost:3000/ is the client address.

[Check this video](https://drive.google.com/file/d/1qKE_CseIC8Mg9qrg2zpT2GJ0nbqOPCMW/view?usp=sharing)
