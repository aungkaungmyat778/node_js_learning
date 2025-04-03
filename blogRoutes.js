const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

//Blogs route
router.get('/', blogController.blog_index);

router.post('/' , blogController.blog_create_post); 

router.get('/create', blogController.blog_create_get);

router.get('/:id', blogController.blog_detail);

router.delete('/:id' ,blogController.blog_delete); 

module.exports = router;

// mongoose and mongo  sandbox routes 
// router.get('/add-blog', (req, res) => { 
//     const blog = new BLog({ 
//         title : 'new BLog',
//         snippet : 'about my new blog',
//         body : ' more about my new blog'
//     })

//     blog.save()
//         .then((result) => { 
//             res.send(result)
//         })
//         .catch((err) => { 
//             console.log(err);
//         })
// })

// router.get('/all-blogs',   (req,res) => { 
//     BLog.find()
//         .then((result) => { 
//             res.send(result);
//         })
//         .catch((err) => { 
//             console.log(err);
//         })
// })

// router.get('/single-blog', (req,res) => { 
//     BLog.findById('67eb731d0c0cd287ef8c457b')
//         .then((result) => { 
//             res.send(result);
//         })
//         .catch((err) => { 
//             console.log(err);
//         })  
// })
