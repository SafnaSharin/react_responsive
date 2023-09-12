import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './navbar';
import Footer from './footer';

const layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default layout