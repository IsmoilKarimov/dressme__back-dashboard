import React from 'react'
import OrderBreadCrumb from './orderBreadCrumb/orderBreadCrumb'
import OrderHome from './orderHome/orderHome'

export default function Orders() {
  return (
    <div className='w-full h-[100vh] overflow-y-auto'>
        <OrderBreadCrumb />
        <OrderHome />
    </div>
  )
}
