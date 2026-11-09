import { useAuth } from "../../context/index"
import "./Auth.css"

export const AuthLogin = () => {

    const { username, password, authDispatch } = useAuth();

    console.log({username, password})

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



    return(

        <div className="grid">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">Login</h2>

                <form>
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
                </form>
            </div>
        </div>
    )
}