import React from 'react'

const loginForm = (props) => {
    return (
        <form>
            <div>
                <input placeholder={"Login"}/>
            </div>
            <div>
                <input placeholder={"Password"}/>
            </div>
            <div>
                <input type={"checkbox"}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const login = (props) => {
    return (<div>
        <h1>LOGIN</h1>
        <loginForm/>
    </div>)
}


export default login