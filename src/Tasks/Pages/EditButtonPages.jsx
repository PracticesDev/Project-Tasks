import React from 'react'

export const EditButtonPages = ({tasks,showTasks,setEdit,setList}) => {

    const save_Form = (e, id) => {

        e.preventDefault();
        let target = e.target;

        const tasks_saves = showTasks();
        console.log(tasks_saves)
        
        const index = tasks_saves.findIndex(tasks => tasks.id === id);
        
        let tasks_update = {
            id,
            title:target.title.value,
            description:target.description.value
        }
        
        console.log(index,tasks_update)

        tasks_saves[index] = tasks_update;

        localStorage.setItem("tasks", JSON.stringify(tasks_saves))

        setList(tasks_saves);
        setEdit(0);



    }

    return (
        <div className='edit_form'>

            <h3>Editar Tarea</h3>
            <form onSubmit={e => save_Form(e, tasks.id)}>
                <input
                    type="text"
                    name='title'
                    className='title_edit'
                    defaultValue={tasks.title}
                />
                <textarea
                    name="description"
                    defaultValue={tasks.description}
                    className='description_edit'
                ></textarea>
                <input
                    type="submit"
                    className='edit'
                    value="update" />
            </form>


        </div>
    )
}
