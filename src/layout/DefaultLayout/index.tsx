import { Header } from '@src/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default DefaultLayout