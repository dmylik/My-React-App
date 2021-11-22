import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import {requiredField} from "../../basket/validators/validators";
import {Input} from "../../basket/FormsControls/FormsControls";
import styles from '../../basket/FormsControls/FormsControls.module.css'


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"} validate={[requiredField]} component={Input}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} type={"password"} validate={[requiredField]} component={Input}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
        </div>
        {props.captchaURL && <img src={props.captchaURL}/>}
        {props.captchaURL && <Field placeholder={"Symbol from image"} name={"captcha"}  validate={[requiredField]} component={Input}/>}

        {props.error && <div className={styles.formOllError}> {props.error} </div>}
        <div><button>Login</button></div>
    </form>
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);


const Login = (props) =>{
    const onSubmit = (formData) =>{
        // login сдесь callback
        // mylik.dima@gmail.com
        //L360b04V26f7
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

        if(props.isAuth) {
        console.log(props.isAuth);
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm captchaURL={props.captchaURL} onSubmit={onSubmit}/>
    </div>
};
const  mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        captchaURL: state.authReducer.captchaURL}
};

export default connect(mapStateToProps,{login})( Login)