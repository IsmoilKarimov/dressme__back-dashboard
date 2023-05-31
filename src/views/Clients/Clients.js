import React from 'react'
import ClientsBreadCrumb from './clientsBreadCrumb/clientsBreadCrumb'
import ClientsHome from './clientsHome/clientsHome'

export default function Clients() {
  return (
    <div className='w-full h-fit'>
        <ClientsBreadCrumb />
        <ClientsHome />
    </div>
  )
}

