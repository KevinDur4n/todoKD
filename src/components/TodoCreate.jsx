import React from "react";
import { TodoButtonCreate } from "./TodoButtonCreate/TodoButtonCreate";

function TodoCreate({addTodo}){
    return(
        <div className="w-full  p-5 rounded-lg border bg-gray-200 flex-col flex justify-between">
            <input className="bg-white mb-2 focus:scale-105 transition-all" placeholder="Escribe tu TODO"/>
            <button className=" relative hover:bg-zinc-800 hover:scale-105 active:bg-zinc-900 transition-all"
            
            >Agregar</button>
    
        </div>
    );
}

export {TodoCreate};
