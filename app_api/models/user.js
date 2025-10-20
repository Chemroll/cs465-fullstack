const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: trusted
    },
    hash: String,
    salt: String
});

mongoose.model('user', userSchema);