import React, {useState, useEffect} from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

const App = () => {
  const [Todo, setTodos] = useState([]);
  
  const handleAddTodo = (newTodo) =>{
    setTodos([...todos, newTodo]);
  };

  const handleDragEnd = (result)



  useEffect(() =>{
    const fetchTodos = async () =>{
      try{
        const response = await axios.get('/api/todos');
        setTodos(response.data);
      } catch (error){
        console.error("Error fetching Todos:", error);
      }
    };

    fetchTodos();
  }, []);

  return(
    <div>
      <TodoForm onAddTodo={handleAddTodo} />
    </div>
  );

};

export default App;
