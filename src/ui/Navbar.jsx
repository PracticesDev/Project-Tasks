import { NavLink } from 'react-router-dom';


export const Navbar = () => {

    return (
        <nav class="nav">
            <div className="nav" >
                <ul >
                    <li >
                        <a ><NavLink to="/inicio"> Tareas </NavLink></a>
                        <a> <NavLink to="/tareas"> Crear tareas </NavLink></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}