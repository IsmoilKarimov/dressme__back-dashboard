import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Statistics from './Statistics/Statistics'
import Clients from './Clients/Clients'
import Products from './Products/Products'
import Orders from './Orders/Orders'
import OnlineChat from './OnlineChat/OnlineChat'
import Settings from './Settings/Settings'
import Shop from './Shop/Shop'
import Sale from './Sale/sale'

export default function RouterList() {
  return (
    <div className='w-full h-[91vh]'>
        <Routes >
            <Route path='/statistics' element={<Statistics />} />
            <Route path='/sale' element={<Sale />} />
            <Route path='/clients' element={<Clients/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/online_chat' element={<OnlineChat/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/shop' element={<Shop/>} />
        </Routes>
    </div>
  )
}
