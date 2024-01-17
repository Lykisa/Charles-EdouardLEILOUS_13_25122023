import { useNavigate } from "react-router";
import Account from "../components/Accounts/Accounts";
import UserInfos from "../components/UserInfos/UserInfos";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function User() {

    const state = useSelector((state) => state);
    const navigate = useNavigate();
    console.log(state.token)

    useEffect(() => {
        if (state.token == undefined || state.token == null) {
            return navigate('/sign-in')
        }
    })

  
    return(
        <main className="main bg-dark">
            <UserInfos />
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
        </main>
    )
}

export default User