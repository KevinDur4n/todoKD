import React, { useState } from "react";
import './ButtonDeleteAll.css'
import { FaTrashAlt } from 'react-icons/fa';
import { TodoContext } from "../../context/TodoContext";
import { Modal } from "../Modal/Modal";

function ButtonDeleteAll({}) {
    const {deleteAllTodos} = React.useContext(TodoContext);

    const [openModalConfirmation,setOpenModalConfirmation] = useState(false);

    const onDelete = ()=>{
        deleteAllTodos();
        setOpenModalConfirmation(false);
    }

    const openModal = () =>{
        setOpenModalConfirmation(!openModalConfirmation)
    }

    const closeModal = () =>{
        setOpenModalConfirmation(false);
    }

    return (
        <>
        <div className="ButtonDelete drop-shadow-xl border border-black" onClick={openModal}>
            <FaTrashAlt/>

            <div className="labelButtonDellete ">
                Eliminar todos
            </div>
        </div>

            {
                openModalConfirmation && (
                    <Modal>
                    <div className="bg-white text-black rounded-lg ">
                        <div className="p-2 grid grid-cols-2 gap-3">
                        <p className=" col-span-2">¿Esta seguro de eliminar todos los TODOs?</p>
                    
                        <button onClick ={onDelete} className=" bg-red-800 rounded-lg active:bg-red-900 hover:bg-red-700 text-white">Eliminar</button>
                        <button onClick={closeModal} className=" bg-transparent hover:border-black rounded-lg">Cancelar</button>

                        </div>

                    </div>
                    </Modal>    
                )
            }
        </>

    );


}

export { ButtonDeleteAll };