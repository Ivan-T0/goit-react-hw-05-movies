import { NavLink, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import cl from './Layout.module.css'

const Layout = () => {
    return (<div>
        <header className={cl.header} >
            <nav>
      <ul className={cl.navList}>
        <li className={cl.navLink}><NavLink to='/'className={cl.navText}  activeClassName={cl.activeLink}>Home</NavLink></li>
        <li className={cl.navLink}><NavLink to= '/movies'className={cl.navText} activeClassName={cl.activeLink}>Movies</NavLink></li>
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