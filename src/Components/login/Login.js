// import React from 'react'
// import {Field, reduxForm} from "redux-form";
// import {Input} from "../../basket/FormsControls/FormsControls";
// import {requiredField} from "../../basket/validators/validators";
// import {connect} from "react-redux";
// import {login} from "../../redux/reducers/auth-reducer";
// import {Redirect} from "react-router-dom";
// import styles from '../../basket/FormsControls/FormsControls.module.css'
//
//
//
// const LoginForm = (handleSubmit) =>{
//     return  <form onSubmit={handleSubmit}>
//         <div>
//             <Field placeholder={"Email"} name={"email"} validate={[requiredField]} component={Input}/>
//         </div>
//         <div>
//             <Field placeholder={"Password"} name={"password"} type={"password"}  validate={[requiredField]} component={Input}/>
//         </div>
//         <div>
//             <Field type={"checkbox"} name={"rememberMe"}  component={Input}/> remember me
//         </div>
//
//         {/*{error && <div className={styles.formOllError}> {error} </div>}*/}
//         <div>
//             <button>
//                 Login
//             </button>
//         </div>
//     </form>
// };
//
// //
// const LoginReduxForm = reduxForm({
//     // a unique name for the form
//     form: 'login'
// })(LoginForm);
//
//
// const Login = (props) => {
//     // Компонта LoginReduxForm сама соберет данные из form в (LoginForm)
//     // и положит их в обект formData
//     const onSubmit = (formData) =>{
//         // login сдесь callback
//         // mylik.dima@gmail.com
//         //L360b04V26f7
//         alert(formData);
//         console.log(formData);
//         debugger;
//         props.login(formData.email, formData.password, formData.rememberMe);
//     };
//     //
//     if(props.isAuth) {
//         console.log(props.isAuth);
//         return <Redirect to={"/profile"}/>
//     }
//
//     // место для отправления на state
//     return <div>
//         <h1>LOGIN</h1>
//         <LoginReduxForm onSubmit={onSubmit}/>
//     </div>
// };
//
// const  mapStateToProps = (state) => {
//     return {isAuth: state.authReducer.isAuth}
// };
//
// // login сдесь ThunkCreater
// export default connect(mapStateToProps,{login})( Login)