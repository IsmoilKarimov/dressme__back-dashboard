import React from 'react'
import ProductsBreadCrumb from './productsBreadCrumbs/productsBreadCrumbs'
import ProductsHome from './productsHome/productsHome'

export default function Products() {
  return (
    <div className='w-full h-[100vh] overflow-y-auto'>
        <ProductsBreadCrumb />
        <ProductsHome />
    </div>
  )
}

