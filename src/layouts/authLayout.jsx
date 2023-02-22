import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/authContext'

function AuthLayout() {

  const { user } = useAuthContext();

  if(user){
    return <Navigate to="/home" replace/>
  }

  return (
    <Outlet/>
  )
}

export default AuthLayout