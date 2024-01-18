import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../actions/userActions";
import './UserInfos.css'

function UserInfos() {

    const state = useSelector((state) => state);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleForm = async (e) => {
        e.preventDefault();

        const userData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
        };

        await dispatch(editUser(state.token, userData))
        setOpen(false)
        //Si il y a quelque chose dans user, il va vérifier qu'il y a aussi un token
    };

    return(
        <div className="userProfile">
            {open && (
                <>
                <h1>Welcome back</h1>
                <form className="userProfile_inputs">
                    <input type="text" defaultValue={state.firstName} placeholder="firstName" id="firstName" />
                    <input type="text" defaultValue={state.lastName} placeholder="lastName" id="lastName"/>
                </form>
                <div>
                    <button onClick={(e) => handleForm(e)}>Save</button>
                    <button onClick={() => setOpen(false)}>Cancel</button>
                </div>
                </>
            )}
            {!open && (
                <>
                    <h1>Welcome back <br /> {state.firstName} {state.lastName} ! </h1>
                    <button className="edit-button" onClick={() => setOpen(true)} >Edit Name</button>
                </>
                
            )}
        </div>
    )
}

export default UserInfos