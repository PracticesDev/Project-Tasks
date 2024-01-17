import { Routes, Route } from "react-router-dom"
import { TasksRoutes } from "../Tasks/routes/TasksRoutes"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<TasksRoutes />} />
            </Routes>
        </>
    )
}
