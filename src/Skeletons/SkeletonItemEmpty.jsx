import React from "react"
import {GiNotebook} from "react-icons/gi"
function SkeletonItemsEmpty () {

    return (
        <div className=" p-10 justify-center items-center flex flex-col ">
            <p className=" text-sm md:text-4xl">¡Por ahora no tienes ninguna tarea!</p>
            <GiNotebook className=" md:text-7xl"/>
        </div>
    )
}

export {SkeletonItemsEmpty}