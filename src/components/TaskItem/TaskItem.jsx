import React from 'react'
import './TaskItem.css'

const TaskItem = ({task, deleteTask}) => {
    return (
        <div className='items'>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.createdAt}</span>
            <button className='delete' onClick={() => deleteTask(task.id)}>Finalizar</button>
            <hr />
        </div>
    )
}

export default TaskItem