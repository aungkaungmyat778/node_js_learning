const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoute = require('./routes/blogRoutes')
//express app
const app = express();

//connnect to mongodb
const dbUrl = 'mongodb+srv://Gomeletzzz:199526Akm@nodetuts.bruk8ve.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodeTuts';  
mongoose.connect(dbUrl,  { useNewUrlParser : true, useUnifiedTopology : true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err) );


//Register views engine 
app.set('view engine' , 'ejs')

//middleware & static file 
app.use(express.static('public')); 
// To show the rquest body that is input from user
app.use(express.urlencoded({extend : true}));
app.use(morgan('dev'));



app.get('/', (req,res) => { 
    res.redirect('/blogs');
});

app.get('/about', (req,res) => { 
    // res.send('<p>about page</p>');
    // res.sendFile('/views/about.html',{ root: __dirname });
    res.render('blogs/about' ,{title : 'About'}); 
});
//blog route 
app.use('/blogs' , blogRoute);

//404 
app.use((req,res) => { 
    // res.status(404).sendFile('/views/404.html',{ root: __dirname })
    res.status(404).render('blogs/404', {title : '404'})
})