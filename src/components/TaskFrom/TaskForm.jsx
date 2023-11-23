import React, { useState } from 'react'
import './TaskForm.css'

const TaskForm = ({addTask}) => {

    const [openModal, setOpenModal] = useState(false)
    const handleOpenNewTaskModal = () =>{
        setOpenModal(true)
    }
    const handleCloseNewTaskModal = () =>{
        setOpenModal(false)
    }

    const handleAddNewTask = (e) =>{
        e.preventDefault()
        const {title, description } = e.target
        if(title.value && description.value){
            addTask({
                title: title.value, 
                description: description.value,
                id: Math.random() + title.value,
                createdAt: new Date().toLocaleString()
            })
        }
        handleCloseNewTaskModal()

    }
  return (
    <div>
        <div className='newtask'><button onClick={handleOpenNewTaskModal}>Nueva tarea +</button></div>
        {openModal && (
            <div className='modal-background'>
                <div className='modal'>
                    <h2>Agregar nueva tarea</h2>
                    <form onSubmit={handleAddNewTask}>
                        <div className='title'>
                            <label htmlFor='title'></label>
                            <input placeholder='Titulo de la tarea' id='title' name='title'/>
                        </div>
                        <div className='description'>
                            <label htmlFor='description'></label>
                            <textarea placeholder='Escribe una nueva tarea' id='description' name='description'></textarea>
                        </div>
                        <div className='buttons'>
                            <button className='accept' type='submit'>Agregar</button>
                            <button className='cancel' onClick={handleCloseNewTaskModal}>Cancelar</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        ) }
    </div>
  )
}

export default TaskForm


