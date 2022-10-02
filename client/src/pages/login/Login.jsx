import "./login.css"

export default function Login(){
    return(
        <div className="login" >
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">React - Social</h3>
                    <span className="loginDesc">This is description</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder="Enter Email" className="loginInput" />
                        <input type="password" placeholder="Enter Password" className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot your password?</span>
                        <button className="loginRegister">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}