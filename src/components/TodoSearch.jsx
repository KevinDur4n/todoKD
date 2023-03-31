import React from "react";
import { TodoContext } from "../context/TodoContext";

function TodoSearch(){

    const {searchValue,
        setSearchValue} = React.useContext(TodoContext);

    const onChangeValueSearched = (e)=>{
        const text = e.target.value;
        setSearchValue(text);
    }


    return(
        <input onChange={onChangeValueSearched} className=" transition-all mb-3" placeholder="Escribe tu nota"></input>
    );
}

export {TodoSearch};