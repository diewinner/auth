import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "../style/LogInPage.scss"
function LogPage(props) {
    let navigate = useNavigate();

    
    function handlerLogIn(event) {
        event.preventDefault();
        props.setIsLoggedIn(true);
        navigate('/login');
    }
    function handleChangeLogin (event) {
        props.setLogin(event.target.value)
    }
    function handleChangePassword (event) {
        props.setPassword(event.target.value)
    }
    function loginHandler (e) {
        const admin = /admin/
        props.setLogin(e.target.value);
        admin.test(String(e.target.value).toLowerCase()) ? props.setLoginError('') : props.setLoginError('Введи admin')

    }
    function passwordHandler (e) {
        const admin = /admin/
        props.setPassword(e.target.value);
        if (admin.test(String(e.target.value).toLowerCase())) {
            
            props.setPasswordError('')
        } else {
            props.setPasswordError('Введи admin')
        }
    }
    function onBlurHandler (e) {
     e.target.name === 'login' ? props.setLoginDirty(true) : props.setPasswordDirty(true)
    }

    useEffect(() => {
        if(props.loginError || props.passwordError) {
            props.setFormValid(false)
        } else {
            props.setFormValid(true)
        }
    })


    return <div className="wrapper">
        <h1 className="header_text">Авторизация</h1>
        <form className="form" onSubmit={handlerLogIn}>

        <div className="inputs">
            {props.loginDirty && <div className="error">{props.loginError}</div>}
            <input name= 'login' onBlur={e => onBlurHandler(e)} value={props.login} onChange={e => loginHandler(e)}  type='text' placeholder='Enter your login...'/>
            {(props.passwordDirty && props.passwordError) && <div className="error">{props.passwordError}</div>}
            <input name= 'password' onBlur={e => onBlurHandler(e)} value={props.password} onChange={e => passwordHandler(e)} type='password' placeholder='Enter your password...'/>
        </div>
        <button className="btn_login" disabled={!props.formValid} type='Submit'>LogIn</button>
          </form>
    </div>

}



export  {LogPage};