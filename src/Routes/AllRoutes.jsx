import React from 'react'
import { Route,Routes } from "react-router-dom"
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import PrivateRoute from "../Components/PrivateRoute"
// import Home from '../Pages/Home'

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signup" element={<Signup />}  />
        <Route path="/login" element={<Login />}  />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>   }  />
    </Routes>
  )
}

export default AllRoutes