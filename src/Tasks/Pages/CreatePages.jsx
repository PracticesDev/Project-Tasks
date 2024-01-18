import React, { useState } from 'react'
import {  SaveLocalStorage } from '../../Helpers/LocalStorage'

export const CreatePages = () => {

    const titleComponent = "Añadir Tarea"

    const [dateForm, setDateForm] = useState({
        title : '',
        description: '',

    })

    //const {title, description } = dateForm

    const captureDate = ( e ) =>{
        e.preventDefault();
        

        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        let tasks = {
            id: new Date().getTime(),
            title,
            description,
        };

        setDateForm(tasks)

        //console.log(dateForm)

        SaveLocalStorage("tasks",tasks);

    }

    return (
        <>
            <aside className="lateral">
                <div className="add">
                    <h3 className="title">{titleComponent}</h3>

                    <form onSubmit={ captureDate }>
                        <input
                            type="text"
                            id="title"
                            name='title'
                            placeholder="Titulo" />
                        <textarea
                            id="description"
                            name='description'
                            placeholder="Descripción"></textarea>
                        <input
                            type="submit"
                            id="save"
                            value="Guardar" />
                    </form>
                </div>
            </aside>

        </>
    )
}
