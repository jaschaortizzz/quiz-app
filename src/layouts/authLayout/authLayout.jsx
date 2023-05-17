import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'


function AuthLayout({user}) {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const JSONToken = JSON.parse(token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: JSONToken });
    }
  }, [dispatch]);

  if(user){
    return <Navigate to="/home" />
  }

  return (
    <Outlet/>
  )
}

AuthLayout.propTypes = {
  user: PropTypes.shape({}),
}

AuthLayout.defaultProps = {
  user: null,
}

export default AuthLayout