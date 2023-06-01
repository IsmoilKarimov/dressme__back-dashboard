import React, { useState } from 'react'
import './orders.css'
import { Link } from 'react-router-dom'
import { star } from '../../../assets'

export default function SaleHome() {

    const [products, setProducts] = useState([
        {
        id:1,
        title:'Спортивная мужская кроссовка Nike RUN',
        vendorCode:'BAA-00004',
        type:'Футболка',
        col:'128',
        price:'452 000',
        size:'4XL',
        ranking:'4.7',
        quality:'Реплика',
        catalog:'Верхняя одежда',
        category:'Спорт',
        },
        {
            id:2,
            title:'Спортивная мужская кроссовка Nike RUN',
            vendorCode:'BAA-00004',
            type:'Футболка',
            col:'128',
            price:'452 000',
            size:'4XL',
            ranking:'4.7',
            quality:'Реплика',
            catalog:'Верхняя одежда',
            category:'Спорт',
        },
        {
            id:3,
            title:'Спортивная мужская кроссовка Nike RUN',
            vendorCode:'BAA-00004',
            type:'Футболка',
            col:'128',
            price:'452 000',
            size:'4XL',
            ranking:'4.7',
            quality:'Реплика',
            catalog:'Верхняя одежда',
            category:'Спорт',
        },
        {
            id:4,
            title:'Спортивная мужская кроссовка Nike RUN',
            vendorCode:'BAA-00004',
            type:'Футболка',
            col:'128',
            price:'452 000',
            size:'4XL',
            ranking:'4.7',
            quality:'Реплика',
            catalog:'Верхняя одежда',
            category:'Спорт',
        },
    ]) 

  return (
    <div className='w-full flex flex-col px-10'>
        <div className='flex items-center text-[22px] font-medium py-6 border-b border-lightBorderColor'>Список заказов</div>

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
                            <span className='text-sm font-medium ml-5 mr-4'>Время года</span>
                            <svg className='mr-6' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button className='flex items-center border-r-2 border-lightBorderColor'>
                            <span className='text-sm font-medium ml-5 mr-4'>Цвет</span>
                            <svg className='mr-6' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button className='flex items-center'>
                            <span className='text-sm font-medium ml-5 mr-4'>Размеры</span>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <span className='font-medium text-sm mr-[52px]'>Последние добавленные</span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
        
        <div className='w-full flex flex-col mt-5'>            
            <div className='w-full rounded-xl overflow-x-auto  font-medium saleScroll  border border-lightBorderColor'>
                <table className='w-full'>
                    <thead className='h-11 bg-lightBorderColor text-start rounded-t-xl text-sm'>
                        <tr className='rounded-xl '>
                            <th>
                                <div className='w-6 h-6 m-auto rounded-lg bg-white border border-darkerBorderColor'></div>
                            </th>
                            <th>Фото</th>
                            <th>Наименование товара</th>
                            <th>Артикул</th>
                            <th>Тип</th>
                            <th>Цвет</th>
                            <th>Размер</th>
                            <th>Сезон</th>
                            <th>Пол</th>
                            <th>Цена продажи</th>
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
                        {products.map(data =>(
                            <tr key={data.id} className={`${data.id % 2 == 0 ? 'bg-paginationBackground' : 'bg-white'}  border-b border-lightBorderColor`}>
                                <td>
                                    <div className='w-6 h-6 m-auto rounded-lg bg-white border border-darkerBorderColor'></div>
                                </td>
                                <td>
                                    <div className='w-16 h-16 m-auto my-2 rounded-xl border border-darkerBorderColor bg-slate-100'></div> 
                                </td>
                                <td className='w-[15%]'>
                                    <Link to='#' className='text-textBlueColor'>{data.title}</Link>  
                                </td>
                                <td>{data.vendorCode}</td>
                                <td>{data.type}</td>
                                <td>
                                    <div className='w-8 h-8 m-auto bg-weatherSummerColor rounded-lg'></div>
                                </td>
                                <td>{data.size}</td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor mr-1'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 10H19" stroke="#007DCA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 1V19" stroke="#007DCA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 6L6 2" stroke="#007DCA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 6L14 2" stroke="#007DCA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 14L14 18" stroke="#007DCA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 14L6 18" stroke="#007DCA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6 10L2 14" stroke="#007DCA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6 10L2 6" stroke="#007DCA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M14 10L18 6" stroke="#007DCA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M14 10L18 14" stroke="#007DCA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                        <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor mr-1'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.1701 10.0598H7.83007C6.65007 10.0598 6.24007 9.26982 6.93007 8.30982L11.1001 2.46982C11.5901 1.76982 12.4101 1.76982 12.8901 2.46982L17.0601 8.30982C17.7601 9.26982 17.3501 10.0598 16.1701 10.0598Z" stroke="#008F0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M17.5901 18.0001H6.4201C4.8401 18.0001 4.3001 16.9501 5.2301 15.6701L9.22009 10.0601H14.7901L18.7801 15.6701C19.7101 16.9501 19.1701 18.0001 17.5901 18.0001Z" stroke="#008F0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12 22V18" stroke="#008F0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                        <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor mr-1'>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11C5 9.4087 5.63214 7.88258 6.75736 6.75736C7.88258 5.63214 9.4087 5 11 5C12.5913 5 14.1174 5.63214 15.2426 6.75736C16.3679 7.88258 17 9.4087 17 11C17 12.5913 16.3679 14.1174 15.2426 15.2426C14.1174 16.3679 12.5913 17 11 17ZM11 15C12.0609 15 13.0783 14.5786 13.8284 13.8284C14.5786 13.0783 15 12.0609 15 11C15 9.93913 14.5786 8.92172 13.8284 8.17157C13.0783 7.42143 12.0609 7 11 7C9.93913 7 8.92172 7.42143 8.17157 8.17157C7.42143 8.92172 7 9.93913 7 11C7 12.0609 7.42143 13.0783 8.17157 13.8284C8.92172 14.5786 9.93913 15 11 15ZM10 0H12V3H10V0ZM10 19H12V22H10V19ZM2.515 3.929L3.929 2.515L6.05 4.636L4.636 6.05L2.515 3.93V3.929ZM15.95 17.364L17.364 15.95L19.485 18.071L18.071 19.485L15.95 17.364ZM18.071 2.514L19.485 3.929L17.364 6.05L15.95 4.636L18.071 2.515V2.514ZM4.636 15.95L6.05 17.364L3.929 19.485L2.515 18.071L4.636 15.95ZM22 10V12H19V10H22ZM3 10V12H0V10H3Z" fill="#EAA700"/>
                                            </svg>
                                        </button>
                                        <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.61 19.9999C17.95 20.0099 19.24 19.5099 20.23 18.6099C23.5 15.7499 21.75 10.0099 17.44 9.46995C15.9 0.129949 2.42998 3.66995 5.61998 12.5599" stroke="#E17A02" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M7.28011 12.9698C6.75011 12.6998 6.16011 12.5598 5.57011 12.5698C0.910109 12.8998 0.920108 19.6798 5.57011 20.0098" stroke="#E17A02" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15.8201 9.88998C16.3401 9.62998 16.9001 9.48998 17.4801 9.47998" stroke="#E17A02" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M9.96997 20L7.96997 22" stroke="#E17A02" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M13.97 20L11.97 22" stroke="#E17A02" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M13.97 16L11.97 18" stroke="#E17A02" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M9.96997 16L7.96997 18" stroke="#E17A02" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                  <div className='flex items-center justify-center gap-x-1 m-auto'>
                                    <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor'>
                                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.39579 19.7083C13.3193 19.7083 16.5 16.5277 16.5 12.6042C16.5 8.68064 13.3193 5.5 9.39579 5.5C5.47227 5.5 2.29163 8.68064 2.29163 12.6042C2.29163 16.5277 5.47227 19.7083 9.39579 19.7083Z" stroke="#0090CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.7083 2.2915L14.6666 7.33317" stroke="#0090CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.75 2.2915H19.7083V8.24984" stroke="#0090CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                    </button>
                                    <button className='w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor'>
                                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 14.6668C14.5439 14.6668 17.4167 11.794 17.4167 8.25016C17.4167 4.70634 14.5439 1.8335 11 1.8335C7.45621 1.8335 4.58337 4.70634 4.58337 8.25016C4.58337 11.794 7.45621 14.6668 11 14.6668Z" stroke="#DD006A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11 14.6665V20.1665" stroke="#DD006A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.75 17.4165H8.25" stroke="#DD006A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                    </button>
                                  </div>
                                </td>
                                <td>{data.price} сум</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-full h-11 flex items-center text-sm justify-between rounded-b-xl bg-lightBorderColor px-5'>
                <div className='font-medium mr-20'>Заказы: <span className='ml-2'>{products.length}</span></div>
                <div className='flex items-center'>
                    <div className='font-medium mr-20'>Головной убор: <span className='ml-2'>0 сум</span> </div>
                    <div className='font-medium ml-10'>Верхняя одежда:<span className='ml-2'>1</span> </div>
                    <div className='font-medium ml-10'>Нижняя одежда:<span className='ml-2'>0</span> </div>
                    <div className='font-medium ml-10'>Обувь:<span className='ml-2'>0</span> </div>
                    <div className='font-medium ml-10'>Аксессуары:<span className='ml-2'>0</span> </div>
                </div> 
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
                Показано 2 из 8
            </button>
        </div>
    </div>
  )
}