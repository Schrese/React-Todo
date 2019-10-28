import React, {Component} from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies', 
    id: 1528817084358,
    completed: false
  }
];

//functions we will need (adding input to list, filter for completed = true, toggle for completed items)



class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      whattodo: data
    };
  }

  addToDo = somethingnew => {
    const newTask = {
      task: somethingnew, 
      id: Date.now(), 
      purchcased: false
    };
  
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList />
      </div>
      
    );
  }
}

export default App;
