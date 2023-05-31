import React from 'react'
import { NavLink } from "react-router-dom";
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='w-full h-[100vh]'>
        <div className='w-full h-20 flex items-center justify-center text-[32px] font-medium mb-[42px]'>RED Tag (store)</div>
        <div className='calc w-full flex flex-col px-2'>
            <NavLink to='/statistics' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-300 mr-6 group-active:bg-textBlueColor group-focus:bg-textBlueColor'></div>
                <div  className='text-[18px] font-medium'>Статистика</div>
            </NavLink>
            <NavLink to='/sale' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-300 mr-6 group-active:bg-textBlueColor group-focus:bg-textBlueColor'></div>
                <div  className='text-[18px] font-medium'>Продажа</div>
            </NavLink>
            <NavLink to='/clients' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-300 mr-6 group-active:bg-textBlueColor group-focus:bg-textBlueColor'></div>
                <div  className='text-[18px] font-medium'>Клиенты</div>
            </NavLink>
            <NavLink to='/products' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-300 mr-6 group-active:bg-textBlueColor group-focus:bg-textBlueColor'></div>
                <div  className='text-[18px] font-medium'>Продукты</div>
            </NavLink>
            <NavLink to='/orders' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-300 mr-6 group-active:bg-textBlueColor group-focus:bg-textBlueColor'></div>
                <div  className='text-[18px] font-medium'>Заказы</div>
            </NavLink>
            <div to='/online_chat' className=' w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-300 mr-6 group-active:bg-textBlueColor group-focus:bg-textBlueColor'></div>
                <div  className='text-[18px] font-medium text-zinc-300'>Онлайн чат</div>
            </div>
            <div to='/settings' className='w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mb-1'>
                <div className='w-6 h-6 rounded-lg bg-gray-300 mr-6 group-active:bg-textBlueColor group-focus:bg-textBlueColor'></div>
                <div  className='text-[18px] font-medium text-zinc-300'>Настройки</div>
            </div>
           
            <NavLink to='/shop' className='group active:text-textBlueColor focus:text-textBlueColor w-full rounded-xl flex items-center px-6 py-5 bg-lightBorderColor mt-auto border border-borderColor mb-6'>
                {/* <div className='w-6 h-6 rounded-lg bg-gray-300 mr-6 group-active:bg-textBlueColor group-focus:bg-textBlueColor'></div> */}
                <svg className='mr-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.01 11.2202V15.7102C3.01 20.2002 4.81 22.0002 9.3 22.0002H14.69C19.18 22.0002 20.98 20.2002 20.98 15.7102V11.2202" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.64 12C7.29 12 8.78 10.66 8.94 9.01L9.16 6.8L9.64 2H6.59C3.97 2 2.97 3 2.61 5.6L2.34 8.35C2.14 10.36 3.62 12 5.64 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='text-[18px] font-medium mr-20'>Магазины</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.53 13.2598L12 9.73976L8.47 13.2598" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NavLink>
        </div>
    </div>
  )
}
