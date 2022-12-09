import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
    }, []);
    

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;

