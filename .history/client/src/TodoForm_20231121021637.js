import React, {useState} from 'react';
import axios from 'axios';


const TodoForm = ({ onAddTodo}) => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
}


const handleAddTodo = async() => {
  // TODO document why this async arrow function is empty

    try {
        const response = await axios.post('api/todos', {title, link});

        onAddTodo(response.data);
    }
}