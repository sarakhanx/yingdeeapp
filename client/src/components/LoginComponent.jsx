import axios from 'axios'
import { useState } from "react";
import Navbar from "./Navbar";
import Swal from 'sweetalert2';
import { authenticate } from '../services/authorize';
import {useNavigate} from 'react-router-dom'

function LoginComponent(){
   const [state,setState] = useState({
    username:"",
    password:""
   })
   const {username,password} = state;
   const navigate = useNavigate();
    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value});
    }
    const logInForm =(e)=>{
        e.preventDefault();
        // axios.defaults.baseURL = 'http://localhost:8080';
        axios.post(`${process.env.REACT_APP_API}/login`,{username,password})
        .then(response =>{
            authenticate(response,()=>navigate("/create"))
        })
        .catch(err=>{
            Swal.fire('not found users',err.response.data.error,'error')
        })
        console.table({username,password}) //will delete it after deployment
    }
    return (
        <>
    <Navbar/>
    {JSON.stringify({username,password})}
        <form 
        className="container text-center"
        onSubmit={logInForm}>
            <div className="">
            <div className="">
                <input type="text"
                placeholder="username"
                className="form-control mt-2"
                value={username}
                onChange={inputValue("username")}
                />
            </div>
            <div className="">
                <input type="password"
                placeholder="password"
                className="form-control mt-2"
                value={password}
                onChange={inputValue("password")}/>
            </div>
            <div>
            <button className="btn btn-success ps-5 pe-5 mt-2" type="submit" >LOGIN</button>
            </div>
            </div>
        </form>
        </>
    )
}

export default LoginComponent;