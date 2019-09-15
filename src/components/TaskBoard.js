import React, { Component } from 'react';
import Task from './Task';

class TaskBoard extends Component {
    state = { 
        board: this.props.board,
        tasks: this.props.tasks
    }
    checkEmpty = () => (this.state.tasks.length === 0)? "No tasks to show!" : "";
    deleteTask = (id) => {
        const items = this.state.tasks.filter(item => item.id !== id);
        this.setState({ tasks: items });
    }
    addTask = () => {
        console.log(`Adding new task to: ${this.state.board}`);
        
    }
    render() { 
        return ( 
        <div className="col-12 col-md-4 p-2">
            <div className="card">
                <div className="card-title text-center">
                    <h2 className="bg-primary text-white">{ this.state.board }</h2>
                </div>
                <div className="card-body d-flex flex-column justify-content-center">
                    { this.state.tasks.map( (e) => <Task key={e.id} atrib={e} delete={this.deleteTask} /> ) }
                    { this.checkEmpty() }
                </div>
                <div className="d-flex justify-content-center p-3">
                    <button className="btn btn-primary" onClick={this.addTask}>Add task</button>
                </div>
            </div>
        </div>
        );
    }
}
 
export default TaskBoard;