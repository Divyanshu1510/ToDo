import React, {useState} from 'react';
import axios from 'axios';


const TodoForm = ({ onAddTodo}) => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
}


const handleAddTodo = async() => {
    try {
        const response = awai axios.post('api/todos', {title, link});

        onAddTodo()
    }
}