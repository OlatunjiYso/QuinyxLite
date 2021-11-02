import React from 'react';

const TaskCard = ({employeeTaskStat})=> {

const { completed, inPogress, notStarted } = employeeTaskStat;
    return (
        <div className="task-card">
            <h4> Task Statistics</h4>
            <div className="task-stat-item">
                <h5>Completed: </h5>
                <span> {completed} </span>
            </div>
            <div className="task-stat-item">
                <h5>In Pogress: </h5>
                <span> {inPogress} </span>
            </div>
            <div className="task-stat-item">
                <h5>Not Started: </h5>
                <span> {notStarted} </span>
            </div>
        </div>
    )
}

export default TaskCard;