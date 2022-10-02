import "./register.css"

export default function Register(){
    return(
        <div className="login" >
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">React - Social</h3>
                    <span className="loginDesc">This is description</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder="Enter Username" className="loginInput" />
                        <input type="email" placeholder="Enter Email" className="loginInput" />
                        <input type="passowrd" placeholder="Enter Password" className="loginInput" />
                        <input type="password" placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Signup</button>
                        <button className="loginRegister">Already have an Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}