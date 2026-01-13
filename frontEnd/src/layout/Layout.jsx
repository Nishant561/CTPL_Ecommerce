import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import NavTags from '../components/NavTags'

function Layout() {
  return (
    <>
        <Header />
        <NavTags/>
        <Outlet/>
    </>
    
  )
}

export default Layout