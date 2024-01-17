import { useNavigate } from 'react-router';
import { Login, getUser } from '../../actions/userActions';
import './SignIn.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function SignInComponent() {

    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();

        const userData = {
            email: document.getElementById('username').value,
            password: document.getElementById('password').value,
        };

        await dispatch(Login(userData))
        //Si il y a quelque chose dans user, il va vérifier qu'il y a aussi un token
    };
    
    useEffect(() => {
        console.log(token)
        if(token) {
            dispatch(getUser(token))
            navigate('/user')
        } 
    }, [ token, dispatch, navigate ])
    
    
    return(
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => handleForm(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <NavLink to='./user' className='sign-in-button'>
                        Sign In
                    </NavLink> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    <button type='submit' className="sign-in-button">Sign In</button>
                    {/*  */}
                </form>
      </section>
    )
}

export default SignInComponent