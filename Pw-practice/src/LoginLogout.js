function LoginLogout() {
    const isLoggedIn = true;


    let element;
    console.log(true);
    if (isLoggedIn) {
        
        element = (
            <div>
                <p>You are Logged in</p>
                <button>Logout</button>
            </div>
        )
    } else {

        element=(
            <form>
                <label>
                    Email:
                    <input type="email"/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password"/>
                </label>
            <button>Login</button>    
            </form>
        );

    }

    return element;
}
export default LoginLogout;