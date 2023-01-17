import React from "react";

function todoItem(props){
    return(
        <div>
            <input type="checkbox" checked={props.completed} onChange={()=>props.handle(props.id)}></input>
            {props.text}
        </div>
    )
}

export default todoItem