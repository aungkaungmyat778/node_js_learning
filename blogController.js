// blog_index, blog_detail, blog_create_get, blog_create_post, blog_delete
const BLog = require('../models/blog');

const blog_index =  (req, res) => { 
    BLog.find().sort({createdAt : -1})
        .then((result) => { 
            res.render('blogs/index', {title : 'All BLogs', blogs : result}) 
        })
        .catch((err) => { 
            console.log(err);
        })
}

const blog_detail = (req, res) => { 
    const id = req.params.id;
    BLog.findById(id) 
       .then(result => { 
            res.render('blogs/details', {blog : result, title: 'Blog Detail' })
       }) 
       .catch((err) => { 
        console.log(err); 
         })
}

const blog_create_get = (req,res) => { 
    res.render('blogs/create' ,{title : 'Create a new blog'})
}

const blog_create_post = (req, res) => { 
      const blog = new BLog(req.body);
        
        blog.save()
        .then(() =>{ 
            res.redirect('/blogs')
        })
        .catch((err) => { 
            console.log(err); 
        })
}

const blog_delete = (req, res) => { 
    const id = req.params.id;

    BLog.findByIdAndDelete(id)
        .then(result => { 
            res.json({redirect : '/blogs'})
        })
        .catch((err) => { 
            console.log(err); 
        })
}

module.exports = { 
    blog_index,
    blog_detail,
    blog_create_get,
    blog_create_post,
    blog_delete,
}