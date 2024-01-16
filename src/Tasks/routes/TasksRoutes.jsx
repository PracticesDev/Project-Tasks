import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/Navbar';
import { StartPages, TasksPages } from '../Pages';

export const TasksRoutes = () => {

  return (
    <>
    <Navbar/>

    <div >
        <Routes>
            <Route path="inicio" element={ <StartPages/> } />
            <Route path="tareas" element={ <TasksPages/>} />                    

            {/*<Route path="/" element={<Navigate to="/marvel" />} />*/}
        </Routes>
    </div>


</>
  )
}
