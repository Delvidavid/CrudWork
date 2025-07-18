export function Login() {
    
    const login = `<div class="box">
        <span class="borderLine"></span>
        <form action="">
            <h2>Sign in</h2>
            <div class="inputBox">
                <input type="text" required>
                <span>Username or Email</span>
                <i></i>
            </div>
            <div class="inputBox">
                <input type="password" required>
                <span>Password</span>
                <i></i>
            </div>
            <div class="links">
                <a href="#">Sign Up</a>
            </div>
            <input type="button" id="submit" value="Login">
        </form>
    </div>`

    return login
}


