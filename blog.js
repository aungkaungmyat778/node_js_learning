const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({ 
    title : { 
        type : String,
        require : true
    }, 
    snippet : { 
        type : String,
        require : true
    },
    body : { 
        type : String,
        require : true
    }
}, {timestamps : true})

const BLog = mongoose.model('Blog', blogSchema);
module.exports = BLog;