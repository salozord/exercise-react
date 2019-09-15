import React, { Component } from 'react';

class Task extends Component {
    state = { 
        id: this.props.atrib.id,
        name: this.props.atrib.name,
        description: this.props.atrib.description
    };
    finishTask = () => {
        console.log(`Finishing task: ${this.state.name} with id: ${this.state.id}`);
        this.props.delete(this.state.id);
    }
    render() { 
        return ( 
            <div className="card m-3">
                <div className="card-header">
                    <h5 className="m-0">Task: { this.state.name }</h5>
                </div>
                <div className="card-body">
                    <p className="text-body">{ this.state.description }</p>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success" onClick={this.finishTask}>Finish</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Task;