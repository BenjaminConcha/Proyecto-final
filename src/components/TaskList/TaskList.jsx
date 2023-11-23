import React from 'react'
import './TaskList.css'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({tasks, deleteTask}) => {
  return (
    <div className='list'>
        {
        tasks.length === 0 
        ? <h2>Aun no has agregado tareas. :(</h2> 
        : <div>
            {tasks.map(task =>( 
                <div className='tasks'><TaskItem task={task} key={task.id} deleteTask={deleteTask}/></div>
            ))}
        </div>
        }
    </div>
  )
}

export default TaskList