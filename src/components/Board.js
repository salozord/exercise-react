import React, { Component } from 'react';
import TaskBoard from './TaskBoard';
import '../styles/Board.css';

class Board extends Component {
    state = { 
        boards: [
            {
                board: 'To-Do',
                tasks: [
                    {
                        name: 'Task No. 1',
                        id: 10,
                        description: 'Prepare the test'
                    },
                    {
                        name: 'Task No. 2',
                        id: 20,
                        description: 'Create the presentation'
                    }
                ]
            },
            {
                board: 'Doing',
                tasks: [
                    {
                        name: 'Task No. 1',
                        id: 11,
                        description: 'Prepare the test'
                    }
                ]
            },
            {
                board: 'Done',
                tasks: []
            }
        ]
    };
    render() { 
        return ( 
            <div>
                <div className="Title">
                    <h1 className="m-0">KanbanApp</h1>
                </div>
                <hr />
                <div className="container-fluid">
                    <div className="row">
                        { 
                            this.state.boards.map( b => <TaskBoard key={b.board} board={b.board} tasks={b.tasks} />)
                        }
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Board;