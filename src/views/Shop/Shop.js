import React from 'react'
import ShopBreadCrumb from './shopBreadCrumb/shopBreadCrumb'
import ShopHome from './shopHome/shopHome'

export default function Shop() {
  return (
    <div className='w-full h-[100vh] overflow-y-auto'>
        <ShopBreadCrumb />
        <ShopHome />
    </div>
  )
}