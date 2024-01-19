import  { useState } from 'react'
import { CreatePages } from './CreatePages'

export const SearchTasksPages = ({ listState, setList }) => {

  const [search, setSearch] = useState("");

  const searchTasks = (e) => {

    setSearch(e.target.value)


    let search_tasks = listState.filter(tasks => {
      return tasks.title.toLowerCase().includes(search.toLocaleLowerCase())
    });

    if (search.length <= 1 || search_tasks <= 0) {
      search_tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    setList(search_tasks)

  }



  return (
    <>
    <CreatePages />
      {/*<aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form >
            <input
              type="text"
              id="search_field"
              placeholder='Buscar'
              name='search'
              autoComplete='off'
              value={search}
              onChange={searchTasks}

            />
            <button id="search">Buscar</button>
          </form>
        </div>
      </aside>*/}

      

    </>
  )
}
