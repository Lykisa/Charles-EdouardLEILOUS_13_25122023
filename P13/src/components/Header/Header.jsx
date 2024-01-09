import { NavLink } from 'react-router-dom'
import logoBank from '/argentBankLogo.png'
import './Header.css'

function Header() {
    return(
        <nav className="main-nav">
            <NavLink to='/' className='main-nav-logo'>
            <img
                className="main-nav-logo-image"
                src={logoBank}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
                
        <div>
            <NavLink to='./sign-in' className='main-nav-item'>
                <i className="fa fa-user-circle"></i>
                Sign In
            </NavLink>
                
        </div>
    </nav>
    )
}

export default Header