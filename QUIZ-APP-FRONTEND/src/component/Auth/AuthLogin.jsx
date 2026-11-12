import { useAuth } from "../../context/index"
import "./Auth.css"

import { LoginHandler } from "../../services/auth-services";

import { useNavigate } from "react-router-dom";

export const AuthLogin = () => {

    const navigate = useNavigate();

    const { username, password, authDispatch } = useAuth();


    const onUsernameChange = (e) => {
        authDispatch({
            type:"USERNAME",
            payload: e.target.value
        })
    }


    const onPasswordChange = (e) => {
        authDispatch({
            type:"PASSWORD",
            payload: e.target.value
        })
    }


    const handleLoginClick = (e) => {
        e.preventDefault();
        const token = LoginHandler(username, password);
        if(token){
            navigate("/")
        }
        authDispatch({
            type: "TOKEN",
            payload: token
        })
        authDispatch({
            type: "CLEAR_CREDENTIALS"
        })
    }


    const handleTestCredentialsClick =() => {
        const token = LoginHandler("riteshkatare", "P@ss%665")
        if(token){
            navigate("/");
        }
        authDispatch({
            type: "TOKEN",
            payload: token
        })
    }



    return(

        <div className="grid">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">Login</h2>

                <form onSubmit={handleLoginClick}>
                    <div className="form-container">
                        <label className="form-label">Username</label>
                        <input placeholder="username" required onChange={onUsernameChange}/>
                    </div>

                    <div className="form-container">
                        <label className="form-label">Password</label>
                        <input placeholder="password" required onChange={onPasswordChange}/>
                    </div>

                    <div className="cta">
                        <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
                    </div>

                    <div>
                        <button className="button login-btn btn-outline-primary btn-margin  sign-up-btn" onClick={handleTestCredentialsClick}>Login with Test Credentials</button>
                    </div>
                </form>
            </div>
        </div>
    )
}