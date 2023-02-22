import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from '../components/Header';
import { useAuthContext } from '../contexts/authContext'


function MainLayout() {

  const { user } = useAuthContext();

  if(!user){
    return <Navigate to="/auth" replace/>
  }

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default MainLayout