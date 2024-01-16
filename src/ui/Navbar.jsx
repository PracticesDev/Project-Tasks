import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {


    const navigate = useNavigate();

    const onLogout = () => {
        
        navigate('/*', {
            
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Tasks App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {/* isActive verifica si  la ruta se esta activando */}    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/tareas"
                    >
                        Tareas
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}