import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Suspense, } from 'react'
import cl from './Layout.module.css'


const Layout = () => {
    const location = useLocation();
    const isHomeActive = location.pathname === "/";
    const isMoviesActive = location.pathname.startsWith("/movies")

    return (<div>
        <header className={cl.header} >
            <nav>
      <ul className={cl.navList}>
        <li className={cl.navLink}><NavLink to='/' className={` ${cl.link} ${isHomeActive ? cl.active : ""}`}>Home</NavLink></li>
        <li className={cl.navLink}><NavLink to= '/movies'className={` ${cl.link} ${isMoviesActive ? cl.active : ""}`}>Movies</NavLink></li>
      </ul>
        </nav>
        </header>
        <main className={cl.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            
        </main>
    </div>)
      
    
}
export default Layout