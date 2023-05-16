import React from "react";
import { useState, useEffect,useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable } from 'react-table';
// import ReqRes from "./ReqRes";
import Reqres from "./Reqres";
import '../style/AccPage.scss'
import axios from 'axios';
import Table from './Table'

function AccPage(props) {

    const [users,setUsers] = useState ({
        loading:false,
        items:[]
    })


    const navigate = useNavigate();
    function handlerLogOut(event) {
        event.preventDefault();
        props.setIsLoggedIn(false);
        navigate('/');
    }
    const data = React.useMemo(
        () => [
          {
            first_name: 'Hello',
            last_name: 'World',
          },
          {
            first_name: 'react-table',
            last_name: 'rocks',
          },
          {
            first_name: 'whatever',
            last_name: 'you want',
          },
        ],
        []
      )
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'Имя',
            accessor: 'first_name', 
          },
          {
            Header: 'Фамилия',
            accessor: 'last_name',
          },
        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })


      useEffect(()=> {
            setUsers({laoding:true});
            const apiUrl = 'https://reqres.in/api/users?page=2';
            axios.get(apiUrl).then((user) => {
                const allUsers = user.data;
                setUsers({loading:false,user:allUsers})
            })
      }, [setUsers])


    return <div className="wrapper_accpage">
        <h2 className="header_text">Добро пожаловать, admin!</h2>
        <Reqres/>
        <Table isLoading={users.loading} user={users.user}/>
        <form onSubmit={handlerLogOut}><button className="btn_logout">Exit</button></form>
    </div>
}

export   {AccPage}