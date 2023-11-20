import React, {useState} from 'react';
import axios from 'axios';


const TodoForm = ({ onAddTodo}) => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
}


const handleAddTodo = async() => {
    try {
        const response = await axios.post('api/todos', {title, link});

        onAddTodo(response.data);

        setTitle('');
        setLink('');
    } catch (error){
        console.error("Error adding Todo:", error);
    }
};


return (
    <div>
    <h2>Add Todo</h2>
    <label>Title:</label>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    <br />
    <label>Link:</label>
    <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
    <br />
    <button onClick={handleAddTodo}>Add Todo</button>
  </div>
)