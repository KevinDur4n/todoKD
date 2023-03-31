import React, { useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import './TodoForm.css'


function TodoForm() {

    const[content,setContent] = useState("");
    
    const {addTodo,setOpenModal} = React.useContext(TodoContext);

    const onChangeContent = (e)=>{
        const text = e.target.value;
        setContent(text);
    }
    
    const onSubmit = (e) =>{
        e.preventDefault();
        if(content){
            addTodo({text:content,completed:false});
            setOpenModal(false);
            setContent("");
        }
    }

    const onCancel = () =>{
        setOpenModal(false);
    }

    return (
        <div className=" bg-white p-9 rounded-lg text-black m-1" onSubmit={onSubmit}>

            <form action="">
                <p>Introduce el contenido de tu TODO.</p>
                <textarea  value={content} onChange={onChangeContent} name="todo_content"  className="p-2 border-black border " id="todo_content" cols="30" rows="3"></textarea>
                
                
                <div className="flex flex-row gap-2">
                    
                <button type="submit" className=" border text-white  border-black rounded-lg bg-green-500 hover:bg-green-400 active:bg-green-700" >Agregar</button>
                <button type="Button" className=" border hover:border-black  rounded-lg" onClick={onCancel} >Cancelar</button>
                </div> 
            </form>
        </div>

    );



}

export { TodoForm }