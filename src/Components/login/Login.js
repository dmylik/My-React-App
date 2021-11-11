import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../basket/FormsControls/FormsControls";
import {requiredField} from "../../basket/validators/validators";


const LoginForm = (props) =>{
    return  <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"login"} validate={[requiredField]} component={Input}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"}  validate={[requiredField]} component={Input}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"}  component={Input}/>
            remember me
        </div>
        <div>
            <button>
                Login
            </button>
        </div>
    </form>
};

//
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);


const Login = (props) => {
    // Компонта LoginReduxForm сама соберет данные из form в (LoginForm)
    // и положит их в обект formData
    const onSubmit = (formData) =>{console.log(formData);};
    // место для отправления на state
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login