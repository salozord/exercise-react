import React, { Component } from 'react';
import Task from './Task';

class TaskBoard extends Component {
    state = { 
        board: this.props.board,
        tasks: this.props.tasks
    }
    form = {
        name: "",
        description: ""
    }
    checkEmpty = () => (this.state.tasks.length === 0)? "No tasks to show!" : "";
    deleteTask = (id) => {
        const items = this.state.tasks.filter(item => item.id !== id);
        this.setState({ tasks: items });
    }
    addTask = (event) => {
        event.preventDefault();
        console.log(`Adding new task to: ${this.state.board}`);
        this.props.tasks.push({ id: this.form.name, name: this.form.name, description: this.form.description });
        this.setState({ tasks: this.props.tasks });
    }
    render() { 
        return ( 
        <div className="col-12 col-md-4 p-2">
            <div className="card rounded">
                <div className="card-title text-center">
                    <h2 className="bg-primary text-white m-0">{ this.state.board }</h2>
                </div>
                <div className="card-body d-flex flex-column justify-content-center">
                    { this.state.tasks.map( (e) => <Task key={e.id} atrib={e} delete={this.deleteTask} /> ) }
                    { this.checkEmpty() }
                </div>
                <div className="d-flex justify-content-center p-3">
                    <button type="button" className="btn btn-primary" data-toggle="collapse" data-target={"#mycollapse"+ this.state.board} aria-expanded="false" aria-controls={"mycollapse"+ this.state.board}>Add task</button>
                </div>
                <div className="collapse" id={"mycollapse" + this.state.board}>
                    <div className="card card-body">
                        <form onSubmit={this.addTask}>
                            <div className="form-group">
                                <label >Name: </label>
                                <input type="text" id={"inputName"+this.state.board} name="Name" placeholder="Enter name (must be unique)" className="form-control" onChange={(evt) => this.form.name = evt.target.value} required />
                                <label >Description: </label>
                                <input type="text" id={"inputDescription"+this.state.board} name="Description" placeholder="Enter description" className="form-control" onChange={(evt) => this.form.description = evt.target.value} required />
                            </div>
                            <button type="submit" className="btn btn-primary" data-toggle="collapse" data-target={"#mycollapse"+ this.state.board} aria-expanded="false" aria-controls={"mycollapse"+ this.state.board}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default TaskBoard;