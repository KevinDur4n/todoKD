import React from "react";


function TodoList(props){
    return (
        <section className=" overflow-y-scroll h-3/4 ">
            <ul className="  ">
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};