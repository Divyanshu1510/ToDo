import React from "react";
import{DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import axios from 'axios';


const TodoList = ({ todos, onDragEnd}) => {
    const handleDragEnd = async (result) => {
        const {source, destination, draggableId} = result;

        if (!destination) return;

        if(
            destination.droppableId === source.droppableId && 
            destination.index === source.index
        ){
            return;
        }

        try{

            await axios.put('api/todos/${draggableId',{
                position: destination.index + 1,
            });

            onDragEnd(result);
        } catch (error){
            console.error('Error updating Todo position:', error);
        }
    };

    return(
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {todos.map((todo, index) => (
                  <Draggable key={todo._id} draggableId={todo._id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div>
                          <strong>{todo.title}</strong>
                          {todo.link && <p>{todo.link}</p>}
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      );
};

export default TodoList