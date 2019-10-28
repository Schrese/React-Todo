import React, {Component} from 'react';

class TodoForm extends Component {

    constructor() {
     super();
     this.state = {
         newItem: ''
     }   
    }

    changeHandler = event => {
        this.setState({
            newItem: event.target.value
        });
    };

    submissionHandler = event => {
        console.log('omg! it\'s working?')
        event.preventDefault();
        this.props.addToDo(this.state.newItem);
    }

    render() {
        return (
            <form onSubmit = {this.submissionHandler}>
                <label htmlFor = 'item'>New Task</label>
                <input type = 'text' id = 'task' onChange = {this.changeHandler} value = {this.newItem}/>
                <button>+</button>
            </form>
        );
    }    
}

export default TodoForm;