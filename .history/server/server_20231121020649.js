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
    const {title, link} = req.body;
    
    const newPosition = await Todo.countDocuments() + 1;

    const newTodo = new Todo({title, link, position: newPosition});

    try{
        await newTodo.save();
        res.json(newTodo);
    } catch(error){
        res.status(500).json({error: "Unable to add Todo"});
    }
});



app.get('/api/todos', async (req, res) =>{
    try{
        const todos = await Todo.find().sort('position');
        res.json(todos);
    } catch(error){
        res.status(500).json({error: 'Unable to get Todos'});
    }
});



app.put('/api/todos', async (req, res) =>{
    const {id} = req.params;
    const {position} = req.body;
}