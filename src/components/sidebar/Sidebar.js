import React from 'react'
import { NavLink } from "react-router-dom";
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='w-full h-full'>
        <div className='w-full h-20 flex items-center justify-center text-[32px] font-medium mb-[42px]'>RED Tag (store)</div>
        <div className='calc w-full flex flex-col px-2'>
            <NavLink to='/statistics' className='w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-400 mr-6'></div>
                <div  className='text-[18px] font-medium'>Статистика</div>
            </NavLink>
            <NavLink to='/sale' className='w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-400 mr-6'></div>
                <div  className='text-[18px] font-medium'>Продажа</div>
            </NavLink>
            <NavLink to='/clients' className='w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-400 mr-6'></div>
                <div  className='text-[18px] font-medium'>Клиенты</div>
            </NavLink>
            <NavLink to='/products' className='w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-400 mr-6'></div>
                <div  className='text-[18px] font-medium'>Продукты</div>
            </NavLink>
            <NavLink to='/orders' className='w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-400 mr-6'></div>
                <div  className='text-[18px] font-medium'>Заказы</div>
            </NavLink>
            <NavLink to='/online_chat' className='w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-400 mr-6'></div>
                <div  className='text-[18px] font-medium'>Онлайн чат</div>
            </NavLink>
            <NavLink to='/settings' className='w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-400 mr-6'></div>
                <div  className='text-[18px] font-medium'>Настройки</div>
            </NavLink>
           
            <NavLink to='/shop' className='w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mt-auto border border-borderColor mb-6'>
                <div className='w-6 h-6 rounded-lg bg-gray-400 mr-6'></div>
                <div  className='text-[18px] font-medium'>Магазины</div>
            </NavLink>
        </div>
    </div>
  )
}
