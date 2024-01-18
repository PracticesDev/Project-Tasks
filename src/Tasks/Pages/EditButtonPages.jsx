import React from 'react'

export const EditButtonPages = () => {
    return (
        <div className='edit_form'>

            <h3>Editar Tarea</h3>
            <form >
                <input
                    type="text"
                    name='title'
                    className='title_edit'
                    defaultValue="TitleOrigin"
                />
                <textarea
                    name="description"
                    defaultValue="descriptionOrigin"
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
