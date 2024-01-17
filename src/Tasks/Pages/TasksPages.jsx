import React from 'react'
import { CreatePages } from './CreatePages'

export const TasksPages = () => {

  return (
    <>
      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form >
            <input type="text" id="search_field" placeholder='Buscar' />
            <button id="search">Buscar</button>
          </form>
        </div>
      </aside>
      
      <CreatePages/>

    </>
  )
}
