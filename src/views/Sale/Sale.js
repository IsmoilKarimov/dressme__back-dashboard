import React from 'react'
import SaleBreadCrumb from './saleBreadCrumb/saleBreadCrumb'
import SaleHome from './saleHome/saleHome'

export default function Sale() {
  return (
    <div className='w-full h-[100vh] overflow-y-auto'>
        <SaleBreadCrumb />
        <SaleHome />
    </div>
  )
}