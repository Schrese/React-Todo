import React from 'react';

const Todo = props => {
    // console.log(props);
    return (
        <div  className = {`item${props.item.completed ? ' completed' : ''}`}
                onClick = {() => props.toggleCompleted(props.item.id)}
            >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;