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


ret