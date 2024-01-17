import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import logoBank from '/argentBankLogo.png'
import './Header.css'
import { Logout } from '../../actions/userActions';

function Header() {

    const user = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ifConnected = user.token ? true : false;
    console.log(ifConnected)

    function signOut() {
        dispatch(Logout())
        navigate('./sign-in')
    }

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
            {!ifConnected && (
                <NavLink to='./sign-in' className='main-nav-item'>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            )}
            {ifConnected && (
                <>
                <span>{user.firstName} {user.lastName}</span>
                <a onClick={(e) => {e.preventDefault(); signOut()}} className='main-nav-item'>
                    <i className="fa fa-user-circle"></i>
                    Sign Out
                </a>
                </>
            )}
            
        </div>
    </nav>
    )
}

export default Header