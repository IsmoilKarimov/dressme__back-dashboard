import React from 'react'
import { NavLink } from "react-router-dom";
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='w-full h-[100vh]'>
        <div className='w-full h-20 flex items-center justify-center text-[28px] font-medium mb-[32px]'>RED Tag (store)</div>
        <div className='calc w-full flex flex-col px-2'>
            <NavLink to='/' activeClassName='active' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div  className='text-base font-medium'>Статистика</div>
            </NavLink>
            <NavLink to='/sale' activeClassName='active' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div  className='text-base font-medium'>Продажа</div>
            </NavLink>
            <NavLink to='/clients' activeClassName='active' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div  className='text-base font-medium'>Клиенты</div>
            </NavLink>
            <NavLink to='/products' activeClassName='active' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div  className='text-base font-medium'>Продукты</div>
            </NavLink>
            <NavLink to='/orders' activeClassName='active' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div  className='text-base font-medium'>Заказы</div>
            </NavLink>
            {/* <div to='/online_chat' className=' w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div  className='text-base font-medium text-zinc-300'>Онлайн чат</div>
            </div>
            <div to='/settings' className='w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div  className='text-base font-medium text-zinc-300'>Настройки</div>
            </div> */}
           
            <NavLink to='/shop' activeClassName='active' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mt-auto border border-borderColor'>         
                <div className='text-base font-medium'>Магазины</div>
            </NavLink>
        </div>
    </div>
  )
}
