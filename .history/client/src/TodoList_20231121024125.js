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
            console.error('Error')
        }

    }

}