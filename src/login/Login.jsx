import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../Components/common/preloader/FormsControls/FormsControls'
import { required } from '../utils/validators/validator'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} validate={[required]} component={Input}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const login = (props) => {
    const onSubmit=(formData)=>{
        console.log(formData)
    }
    return (<div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}


export default login