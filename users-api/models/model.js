'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    dob: Date,
    password: {
        type: String,
        required: true
    },
    address: String,
    description: String,
    createdAt: Date
})

module.exports = mongoose.model('Users', UserSchema);
