import {  Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/Navbar';
import { StartPages, SearchTasksPages } from '../Pages';

export const TasksRoutes = () => {

  return (
    <>
      <header className="header">
        <h1>Tasks App</h1>
      </header>

      <Navbar />

      <div >
        <Routes>
          <Route path="inicio" element={<StartPages />} />
          <Route path="tareas" element={<SearchTasksPages />} />
        </Routes>
      </div>
      <footer class="footer">
        &copy; Project Tasks - <a href="https://www.linkedin.com/in/jorge-alberto-avella-a58938213/" target="_blank">Jorge Avella</a>
      </footer>
    </>
  )
}
