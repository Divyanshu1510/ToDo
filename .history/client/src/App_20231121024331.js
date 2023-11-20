import React, {useState, useEffect} from 'react';

import TodoForm from './TodoForm';

const App = () => {
  const [Todo, setTools, ] = useState([]);
  
  const handleAddTodo = (newTodo) =>{
    setTodos([...todos, newTodo]);
  };

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
