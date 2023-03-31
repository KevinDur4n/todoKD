import React from "react";
import { TodoContext } from "../context/TodoContext";

function TodoCounter(){
    const {completedTodos,totalTodos} = React.useContext(TodoContext);

    return (
        <h2 className="text-center text-2xl font-bold" >Haz completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

//
export {TodoCounter}