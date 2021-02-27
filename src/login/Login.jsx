import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../Components/common/FormsControls/FormsControls'
import { required } from '../utils/validators/validator'
import login from '../Redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import styles from "./../Components/common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"}  component={Input}/>Remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                Error
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth){
        return <Redirect to ={"/profile"}/>
    }

    return (
    <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
    )
}

const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)