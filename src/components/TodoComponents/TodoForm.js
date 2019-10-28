import React, {Component} from 'react';

class TodoForm extends Component {


    render() {
        return (
            <form>
                <label htmlFor = 'item'>New Todo</label>
                <button>+</button>
            </form>
        )
    }    
}

export default TodoForm;