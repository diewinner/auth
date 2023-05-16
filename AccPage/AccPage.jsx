import React from "react";
import { useState, useEffect,useMemo } from "react";
import {Route,Routes } from 'react-router-dom';
import {BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useTable } from 'react-table';
// import ReqRes from "./ReqRes";
import Reqres from "./Reqres";
import '../style/AccPage.scss'





function AccPage(props) {
    const navigate = useNavigate();
    function handlerLogOut(event) {
        event.preventDefault();
        props.setIsLoggedIn(false);
        navigate('/');
    }
    return <div className="wrapper_accpage">
        <h2 className="header_text">Добро пожаловать, admin!</h2>
        <Reqres/>
        <form onSubmit={handlerLogOut}><button className="btn_logout">Exit</button></form>

    </div>
}

export   {AccPage}