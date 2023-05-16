import React, { Component } from "react";
import { useState } from "react";
import { useTable } from 'react-table';




class Reqres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                    items:result.data
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        )
    }


    render () {
        const {error,isLoaded,items} = this.state;
        if(error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded){
            return <p>Loading...</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.first_name}</li>
                    ))}
                </ul>
            )
        }
    }
}

export default Reqres;