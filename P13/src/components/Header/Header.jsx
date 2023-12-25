import logoBank from '../../assets/argentBankLogo.png'
import './Header.css'

function Header() {
    return(
        <div className='header'>
            <nav>
                <a href="">
                    <img src={logoBank} alt="logo bank" />
                </a>
                <a href="">
                    <i class="fa fa-user-circle"></i>
                    Sign in
                </a>
            </nav>
        </div>
    )
}

export default Header