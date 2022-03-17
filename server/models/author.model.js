const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {type: String,
    required: [
        true,
        'Name is Required'
    ],
    minLength:[3, "Must be at least 3 characters long."] 
    }
}, {timestamps: true });
module.exports= mongoose.model('Author', AuthorSchema);