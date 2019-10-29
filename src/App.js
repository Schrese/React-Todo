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
      tasks: data
    };
  }

  addToDo = somethingnew => {
    const newItem = {
      task: somethingnew, 
      id: Date.now(), 
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  toggleCompleted = id => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item, 
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    });
  }

  clearCompleted = () => {
    
  }

  render() {
    return (
      <div className = 'App'>
        <div className = 'topPart'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addToDo = {this.addToDo} />
          </div>
      <div className = 'actualList'>
        <TodoList toggleCompleted = {this.toggleCompleted} tasks = {this.state.tasks} clearCompleted = {this.clearCompleted}/>
        </div>
      </div>
      
    );
  }
}

export default App;
