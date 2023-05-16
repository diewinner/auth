import React, { useEffect } from "react"
import { useState } from "react"
import {Route,Routes } from 'react-router-dom';
import AccPage from "../AccPage/AccPage";
import {BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "../style/LogInPage.scss"
function LogPage(props) {
    let navigate = useNavigate();
    useEffect(() => {
        if(props.loginError || props.passwordError) {
            props.setFormValid(false)
        } else {
            props.setFormValid(true)
        }
    })
    
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
        if (admin.test(String(e.target.value).toLowerCase())) {
            props.setLoginError('')
        } else {
            props.setLoginError('Введи admin')
        }
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
        switch (e.target.name) {
            case 'login':
                props.setLoginDirty(true)
                break
            case 'password':
                props.setPasswordDirty(true)
                break
        }
    }
    return <div className="wrapper">
        <h1 className="header_text">Авторизация</h1>
        <form className="form" onSubmit={handlerLogIn}>

        <div className="inputs">
            {(props.loginDirty && props.loginError) && <div className="error">{props.loginError}</div>}
            <input name= 'login' onBlur={e => onBlurHandler(e)} value={props.login} onChange={e => loginHandler(e)}  type='text' placeholder='Enter your login...'/>
            {(props.passwordDirty && props.passwordError) && <div className="error">{props.passwordError}</div>}
            <input name= 'password' onBlur={e => onBlurHandler(e)} value={props.password} onChange={e => passwordHandler(e)} type='password' placeholder='Enter your password...'/>
        </div>
        <button className="btn_login" disabled={!props.formValid} type='Submit'>LogIn</button>
          </form>
    </div>

}



export  {LogPage};