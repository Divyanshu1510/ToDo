const mongoose = require{"mongoose"};


const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    link: {type: String},
    position: {type: Number}
});

const Todo = mongoose

