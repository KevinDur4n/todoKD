import React from "react";

import './skeletons.css';
function SkeletonTodoList() {
    return (
        <div>

        <div className="background">
            <div className="bar medium thin"></div>
            <div className="bar small thin"></div>
        </div>

        <div className="background">
            <div className="bar small thin"></div>
            <div className="bar medium thin"></div>
        </div>

        <div className="background">
            <div className="bar medium thin"></div>
            <div className="bar small thin"></div>
        </div>

        </div>
    );
}


export { SkeletonTodoList };