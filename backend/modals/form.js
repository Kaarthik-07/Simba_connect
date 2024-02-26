const mongoose = require('mongoose');
//for wrting schemas
const schema = mongoose.Schema

//for crerating routes

const form = require  ('../../backend/modals/form');
const formSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    }
},{
    timestamps: true
})

//collection storing name

const Form = mongoose.model('FormData',formSchema);

module.exports = Form;