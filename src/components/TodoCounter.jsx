import React from "react";
import { TodoContext } from "../context/TodoContext";
import { SkeletonCounter } from "../Skeletons/SkeletonCounterTodo";

function TodoCounter() {
    const { completedTodos, totalTodos, loading } = React.useContext(TodoContext);

    return (
        <>
            {loading ?
                <SkeletonCounter />
                : (
                    <h2 className="text-center text-2xl font-bold" >Haz completado {completedTodos} de {totalTodos} TODOs</h2>
                )

            }
        </>

    );
}

//
export { TodoCounter }