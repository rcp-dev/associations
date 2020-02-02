var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String
});

var User = mongoose.model("User", userSchema);

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);


// var newUser = new User({
//     email: "charlie@brown.edu",
//     name: "Charlie Brown"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious"
});

newPost.save(function(err, post){
    if(err){
        console.log(err)
    }else {
        console.log(post)
    }
});