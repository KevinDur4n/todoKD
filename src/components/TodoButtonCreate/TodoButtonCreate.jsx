import React from "react";
import './TodoButtonCreate.css'
function TodoButtonCreate(props) {

    const clickButton = ()=>{
        props.setOpenModal(!props.openModal);
    }

    return (
        <button onClick={clickButton} className="ButtonCreate transition-all">+</button>
    );
}

export { TodoButtonCreate };