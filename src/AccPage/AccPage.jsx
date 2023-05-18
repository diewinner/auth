import React from "react";
import { useState, useEffect,useMemo } from "react";
import { useNavigate } from "react-router-dom";
import '../style/AccPage.scss'
import axios from 'axios';
import Table from './Table'

function AccPage(props) {
  const baseUrl = 'https://reqres.in/api/users/'
  const [users,setUsers] = useState ([])
  const navigate = useNavigate();


    function handlerLogOut(event) {
        event.preventDefault();
        props.setIsLoggedIn(false);
        navigate('/');
    }

      useEffect(()=> {
            axios.get(baseUrl).then((response) => {
                setUsers(response.data.data)
            })
      }, [])


    return <div className="wrapper_accpage">
        <h2 className="header_text">Добро пожаловать, admin! </h2>
         <Table  users={users} /> 
        <form onSubmit={handlerLogOut}><button className="btn_logout">Exit</button></form>
    </div>
}

export   {AccPage}