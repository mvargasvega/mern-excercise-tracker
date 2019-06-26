const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// we add validation to the username and timestaps to see when it was created and or modified
const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;