import React from 'react'
import PropTypes from 'prop-types';
import { Outlet, Navigate } from 'react-router-dom'
import Header from '../../components/Header';

function MainLayout({user}) {

  if(!user){
    return <Navigate to="/" replace/>
  }

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

MainLayout.propTypes = {
  user: PropTypes.shape({}),
};

MainLayout.defaultProps = {
  user: null,
};

export default MainLayout