import React from "react";
import { AiFillDelete } from "react-icons/ai";

function TodoItem({item: todo, onComplete,onDelete}) {
    return (
        <div className="bg-gray-200 mb-5 rounded-md hover:bg-gray-300 transition-all">
                
            <li className="p-2 overflow-clip flex justify-between gap-2">
                <label className={`${todo.completed && 'line-through'}`}>
                <input 
                    checked={todo.completed}
                    onClick={onComplete}
                    type="checkbox"
                    className={`w-5 ${todo.completed && 'line-through'} indeterminate:bg-slate-300 checked:bg-white transition-all`}
                />
                {todo.text}
                
                </label>
                <AiFillDelete className="relative right-0 cursor-pointer hover:text-red-500 text-xl" onClick={onDelete}/>


            </li>
        </div>
    );
}

export { TodoItem };