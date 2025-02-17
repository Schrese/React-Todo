import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    console.log(props)
    return (
        <div>
            {props.tasks.map(item => (
            <Todo 
                key = {item.id}
                item = {item}
                toggleCompleted = {props.toggleCompleted}
                />
            ))}
           <button onClick = {props.clearCompleted}>Clear Completed Tasks</button>
        </div>
    )
}

export default TodoList;