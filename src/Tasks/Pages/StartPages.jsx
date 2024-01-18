import React, { useEffect, useState } from 'react'
import { EditButtonPages } from './EditButtonPages';

export const StartPages = () => {
  //conseguir lo del local

  const [listState, setList] = useState([])
  const [edit, setEdit] = useState([])

  useEffect(() => {

    showTasks();

  }, [])
  const showTasks = () => {

    let list_tasks = JSON.parse(localStorage.getItem("tasks"))
    //console.log(list_tasks)
    setList(list_tasks)

    return list_tasks;

  }

  const deleteTasks = (id) => {

    //Tareas almacenada

    let tasks_save = showTasks();

    // Filtrar tareas del array

    let new_list_tasks = tasks_save.filter(tasks => tasks.id !== parseInt(id));

    //Actualizar estado de tareas

    setList(new_list_tasks);

    //Actualizar datos

    localStorage.setItem('tasks', JSON.stringify(new_list_tasks))

  }

  return (
    <>
      {listState != null ?
        listState.map(tasks => {
          return (
            <article key={tasks.id} className="tasks-item">
              <h3 className="title">{tasks.title}</h3>
              <p className="description">{tasks.description}</p>

              <button className="edit" onClick={ () => setEdit(tasks.id)}>Editar</button>
              <button className="delete" onClick={() => deleteTasks(tasks.id)}>Borrar</button>
              
              { edit === tasks.id && (
                <EditButtonPages/>
              )}
            </article>
          )
        })
        : <h2>No hay Tareas para Mostrar</h2>

      }



    </>
  )
}
