var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);




//  var newUser = new User({
//      email: "hermione@hogwarts.edu",
//      name: "Hermione Granger"
//  });

//  newUser.posts.push({
//      title: "How to make polyjuice",
//      content: "A;SDKFASD;FKLASJDFASKDFAJ;SDKFJ"
//  });

//  newUser.save(function(err, user){
//      if(err){
//          console.log(err);
//      } else {
//          console.log(user);
//      }
//  });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err)
//     }else {
//         console.log(post)
//     }
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "fa;slkdfjasdfk",
            content: "asdlfk,as;df, asdfkas;dflkj, a;sldkfjasdf"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});