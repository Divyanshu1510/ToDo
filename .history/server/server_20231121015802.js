const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const Todo = require('./models/todo.model');


const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());



mongoose.connect('mongodb://localhost:27017/checklistdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(PORT, () =>{
    console.log("Server is running on port ${PORT}")
});


app.post('/api/todos', async (req, res) =>{
    const {title, }
})