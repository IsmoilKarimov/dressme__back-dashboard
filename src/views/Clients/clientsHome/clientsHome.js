import React, { useState } from 'react'
import './clients.css'

export default function SaleHome() {

    const [clients, setClients] = useState([
        {
            id:1,
            idClient:'AA00001',
            name:'Абдулазиз Абдужалилов',
            dataAge:'24',
            dataBirth:'03.01.1999',
            phone:'+998 (97) 740-23-99',
            amount:'12 528 500',
            height:'186',
            weight:'102',
            email:'prince_creative@outlook.com'
        },
        {
            id:2,
            idClient:'AA00002',
            name:'Абдукарим Мирзаев',
            dataAge:'36',
            dataBirth:'08.02.1987',
            phone:'+998 (97) 720-30-40',
            amount:'6 148 000',
            height:'179 ',
            weight:'85',
            email:'abdumalik@gmail.com'
        },
    ]) 

  return (
    <div className='w-full flex flex-col px-10'>
        <div className='flex items-center justify-between py-4 border-b border-lightBorderColor'>
            <div className='flex items-center text-[22px] font-medium '>Список клиентов</div>
            <div className='flex items-center'>
                <button className='flex items-center border border-lightBorderColor bg-lightBgColor px-6 py-3 rounded-xl mr-3'>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  fill-rule="evenodd" clip-rule="evenodd" d="M7.98481 13.3462C4.11719 13.3462 0.814331 13.931 0.814331 16.2729C0.814331 18.6148 4.09624 19.2205 7.98481 19.2205C11.8524 19.2205 15.1543 18.6348 15.1543 16.2938C15.1543 13.9529 11.8734 13.3462 7.98481 13.3462Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.98479 10.0059C10.5229 10.0059 12.58 7.94779 12.58 5.40969C12.58 2.8716 10.5229 0.814453 7.98479 0.814453C5.4467 0.814453 3.38858 2.8716 3.38858 5.40969C3.38003 7.93922 5.42384 9.99731 7.95241 10.0059H7.98479Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span className='font-medium text-base ml-3'>7 клиентов</span>
                </button>
                <div className='flex items-center border border-lightBorderColor bg-lightBgColor rounded-xl px-6 py-3'>
                    <button className='flex items-center border-r border-lightBorderColor pr-5'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.39579 19.7083C13.3193 19.7083 16.5 16.5277 16.5 12.6042C16.5 8.68064 13.3193 5.5 9.39579 5.5C5.47227 5.5 2.29163 8.68064 2.29163 12.6042C2.29163 16.5277 5.47227 19.7083 9.39579 19.7083Z" stroke="#0090CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.7083 2.2915L14.6666 7.33317" stroke="#0090CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.75 2.2915H19.7083V8.24984" stroke="#0090CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='font-medium text-base ml-3'>5 мужчин</span>
                    </button>
                    
                    <button className='flex items-center pl-5'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 14.6668C14.5439 14.6668 17.4167 11.794 17.4167 8.25016C17.4167 4.70634 14.5439 1.8335 11 1.8335C7.45621 1.8335 4.58337 4.70634 4.58337 8.25016C4.58337 11.794 7.45621 14.6668 11 14.6668Z" stroke="#DD006A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 14.6665V20.1665" stroke="#DD006A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.75 17.4165H8.25" stroke="#DD006A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='font-medium text-base ml-3'>5 мужчин</span>
                    </button>
                </div>
                <button className='flex items-center ml-5'>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.19751 10.6199L5.00084 6.81655C5.45001 6.36738 5.45001 5.63238 5.00084 5.18322L1.19751 1.37988" stroke="#007DCA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className='text-textBlueColor text-base ml-2 font-medium'>Скрыть статистику</span>
                </button>
            </div>
        </div>

        <div className='w-full flex items-center'>
            <form className='w-full'>
                <div className='w-full flex items-center py-5 border-b border-lightBorderColor'>
                    <div className='w-[320px] h-12 flex items-center justify-between rounded-xl border border-lightBorderColor bg-lightBgColor px-5 mr-4'>
                        <input type="text" className='w-[90%] bg-transparent outline-none font-medium text-sm' placeholder='Поиск'/>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.80553 16.2959C12.9424 16.2959 16.296 12.9423 16.296 8.80541C16.296 4.66854 12.9424 1.31494 8.80553 1.31494C4.66866 1.31494 1.31506 4.66854 1.31506 8.80541C1.31506 12.9423 4.66866 16.2959 8.80553 16.2959Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.0153 14.4043L16.9519 17.3334" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='h-12 flex items-center border border-lightBorderColor bg-lightBgColor rounded-xl px-5 py-2 mr-5'>
                        <button className='flex items-center border-r-2 border-lightBorderColor'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8333 18.3332V9.1665" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.8333 5.83317V1.6665" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 18.3332V14.1665" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 10.8332V1.6665" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.16669 18.3332V9.1665" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.16669 5.83317V1.6665" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.5 9.1665H5.83333" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.1667 9.1665H17.5" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.33331 10.8335H11.6666" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className='text-sm font-medium ml-5 mr-4'>Фильтр</span>
                        </button>
                        <button className='flex items-center border-r-2 border-lightBorderColor flex-none'>
                            <span className='text-sm font-medium ml-5 mr-4'>Возраст</span>
                            <svg className='mr-6' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button className='flex items-center border-r-2 border-lightBorderColor'>
                            <span className='text-sm font-medium ml-5 mr-4'>Пол</span>
                            <svg className='mr-6' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button className='flex items-center border-r-2 border-lightBorderColor'>
                            <span className='text-sm font-medium ml-5 mr-4'>Размеры</span>
                            <svg className='mr-6' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button> 
                        <button className='flex items-center pl-4'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.08329 15.8332H6.66663C3.33329 15.8332 1.66663 14.9998 1.66663 10.8332V6.6665C1.66663 3.33317 3.33329 1.6665 6.66663 1.6665H13.3333C16.6666 1.6665 18.3333 3.33317 18.3333 6.6665V10.8332C18.3333 14.1665 16.6666 15.8332 13.3333 15.8332H12.9166C12.6583 15.8332 12.4083 15.9582 12.25 16.1665L11 17.8332C10.45 18.5665 9.54996 18.5665 8.99996 17.8332L7.74996 16.1665C7.61663 15.9832 7.30829 15.8332 7.08329 15.8332Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.3304 9.16667H13.3379" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.9962 9.16667H10.0037" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66209 9.16667H6.66957" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg className='ml-3' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <button className='flex items-center h-12 border border-lightBorderColor bg-lightBgColor rounded-xl px-5 mr-3'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.59169 4.23333C8.31669 4.01667 9.11669 3.875 10 3.875C13.9917 3.875 17.225 7.10833 17.225 11.1C17.225 15.0917 13.9917 18.325 10 18.325C6.00836 18.325 2.77502 15.0917 2.77502 11.1C2.77502 9.61667 3.22502 8.23333 3.99169 7.08333" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.55835 4.43317L8.96668 1.6665" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.55835 4.43311L9.36668 6.48311" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='text-textRedColor font-medium text-sm ml-3'>Очистка</span>
                    </button>
                    <button className='flex items-center h-12 border border-lightBorderColor bg-lightBgColor rounded-xl px-5'>
                        <span className='text-textBlueColor font-medium text-sm '>Фильтровать</span>
                    </button>
                    <button className='flex items-center h-12 border border-lightBorderColor bg-lightBgColor rounded-xl px-5 flex-none ml-auto'>
                        <span className='font-medium text-sm mr-[52px]'>Сортировать по дате</span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
        
        <div className='w-full flex flex-col mt-5'>            
            <div className='w-full rounded-xl overflow-x-auto  font-medium saleScroll  border border-lightBorderColor'>
                <table className='w-[128%]'>
                    <thead className='h-11 bg-lightBorderColor text-start rounded-t-xl text-sm'>
                        <tr className='rounded-xl '>
                            <th>
                                <div className='w-6 h-6 m-auto rounded-lg bg-white border border-darkerBorderColor'></div>
                            </th>
                            <th>ID клиента</th>
                            <th>Имя</th>
                            <th>Пол</th>
                            <th>Возраст (дата рождения)</th>
                            <th>Номер телефона</th>
                            <th>Сумма покупок</th>
                            <th>Размеры</th>
                            <th>Коммент</th>
                            <th>Высота роста</th>
                            <th>Вес тела</th>
                            <th>Электронная почта</th>
                            <th className='flex justify-center items-center'>
                                <button className='w-10 h-11 flex items-center justify-center border border-darkerBorderColor rounded-full bg-white py-1'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-base text-center h-11'>
                        {clients.map(data => (
                            <tr key={data.id} className={`${data.id % 2 == 0 ? 'bg-paginationBackground' : 'bg-white'} border-b border-lightBorderColor`}>
                                <td>
                                    <div className='w-6 h-6 m-auto rounded-lg bg-white border border-darkerBorderColor'></div>
                                </td>
                                <td>{data.idClient}</td>
                                <td>{data.name}</td>
                                <td>
                                    <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor m-auto'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.39579 19.7083C13.3193 19.7083 16.5 16.5277 16.5 12.6042C16.5 8.68064 13.3193 5.5 9.39579 5.5C5.47227 5.5 2.29163 8.68064 2.29163 12.6042C2.29163 16.5277 5.47227 19.7083 9.39579 19.7083Z" stroke="#0090CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M19.7083 2.2915L14.6666 7.33317" stroke="#0090CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M13.75 2.2915H19.7083V8.24984" stroke="#0090CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </td>
                                <td>{data.dataAge} года  |  {data.dataBirth}</td>
                                <td>{data.phone}</td>
                                <td>{data.amount} UZS</td>
                                <td className='py-2'>
                                    <button className={`${data.id % 2 == 0 ? 'bg-white' : ''} w-12 h-12 flex items-center justify-center rounded-xl border border-lightBorderColor bg-lightBgColor m-auto`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.97 12.25V16.75C16.97 20.5 15.47 22 11.72 22H7.21997C3.46997 22 1.96997 20.5 1.96997 16.75V12.25C1.96997 8.5 3.46997 7 7.21997 7H11.72C15.47 7 16.97 8.5 16.97 12.25Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M21.97 5.85V9.15C21.97 11.9 20.87 13 18.12 13H16.97V12.25C16.97 8.5 15.47 7 11.72 7H10.97V5.85C10.97 3.1 12.07 2 14.82 2H18.12C20.87 2 21.97 3.1 21.97 5.85Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button className={`${data.id % 2 == 0 ? 'bg-white' : ''} w-12 h-12 flex items-center justify-center rounded-xl border border-lightBorderColor bg-lightBgColor m-auto`}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.08329 15.8332H6.66663C3.33329 15.8332 1.66663 14.9998 1.66663 10.8332V6.6665C1.66663 3.33317 3.33329 1.6665 6.66663 1.6665H13.3333C16.6666 1.6665 18.3333 3.33317 18.3333 6.6665V10.8332C18.3333 14.1665 16.6666 15.8332 13.3333 15.8332H12.9166C12.6583 15.8332 12.4083 15.9582 12.25 16.1665L11 17.8332C10.45 18.5665 9.54996 18.5665 8.99996 17.8332L7.74996 16.1665C7.61663 15.9832 7.30829 15.8332 7.08329 15.8332Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M13.3304 9.16667H13.3379" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.9962 9.16667H10.0037" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6.66209 9.16667H6.66957" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </td>
                                <td>{data.height} см</td>
                                <td>{data.weight} kg</td>
                                <td>{data.email}</td>
                                <td></td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>      

        
        <div className='flex items-center justify-between my-10'>
            <button className='flex items-center border border-lightBorderColor bg-paginationBackground rounded-xl px-5 h-[52px]'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 4.98356C14.725 4.70856 11.9333 4.56689 9.15 4.56689C7.5 4.56689 5.85 4.65023 4.2 4.81689L2.5 4.98356" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.08334 4.1415L7.26668 3.04984C7.40001 2.25817 7.50001 1.6665 8.90834 1.6665H11.0917C12.5 1.6665 12.6083 2.2915 12.7333 3.05817L12.9167 4.1415" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.7083 7.6167L15.1667 16.0084C15.075 17.3167 15 18.3334 12.675 18.3334H7.32499C4.99999 18.3334 4.92499 17.3167 4.83332 16.0084L4.29166 7.6167" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.60834 13.75H11.3833" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.91666 10.4165H12.0833" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className='text-textRedColor font-medium text-base ml-3'>Удалить</span>
            </button>

            <div className="w-full h-fit flex items-center justify-center">
                <button className="h-[52px] flex items-center bg-paginationBackground px-5 py-3 rounded-lg border border-lightBorderColor">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.80249 1.38012L1.99916 5.18345C1.54999 5.63262 1.54999 6.36762 1.99916 6.81678L5.80249 10.6201" stroke="#007DCA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="text-base font-medium text-textBlueColor ml-3">Предыдущий</span>
                </button>
                <div className="flex items-center">
                    <ul className="flex items-center px-6">
                        <li className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-textBlueColor text-base font-medium text-white cursor-pointer">
                        1
                        </li>
                        <li className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-lightBorderColor cursor-pointer text-base font-medium">
                        2
                        </li>
                        <li className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-lightBorderColor cursor-pointer text-base font-medium">
                        3
                        </li>
                        <li className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-lightBorderColor cursor-pointer text-base font-medium">
                        4
                        </li>
                    </ul>
                </div>
                <button className="h-[52px] flex items-center bg-paginationBackground px-5 py-3 rounded-lg border border-lightBorderColor">
                    <span className="text-base font-medium text-textBlueColor mr-3">Следующий</span>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19751 10.6199L5.00084 6.81655C5.45001 6.36738 5.45001 5.63238 5.00084 5.18322L1.19751 1.37988" stroke="#007DCA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>

            <button className='flex flex-none text-base font-medium items-center border border-lightBorderColor bg-paginationBackground rounded-xl px-5 py-[18px]'>
                Показано 2 из 7
            </button>
        </div>
    </div>
  )
}
