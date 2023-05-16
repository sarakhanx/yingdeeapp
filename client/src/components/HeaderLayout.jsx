import React from 'react'
import {  } from 'react-router-dom'
import { Link, useNavigate,Outlet } from "react-router-dom";
import { getUser,logOut } from "../services/authorize";
import Navbar from './Navbar';
import Footer from './Footer';




const HeaderLayout = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
      logOut(navigate);
    }
  return (
    <div>
        <Navbar/>
    <Outlet/>
    
    <Footer/>

    </div>
  )
}

export default HeaderLayout