import React from 'react'
import './sale.css'

export default function Sale() {
  return (
    <div className='w-full flex flex-col '>
        <div className='flex items-center text-2xl font-medium py-[34px] border-b border-lightBorderColor'>Продажа</div>
        <div className='w-full flex items-center mb-10'>
            <form className='w-full'>
                <div className='w-full flex items-center py-5 border-b border-lightBorderColor'>
                    <div className='w-[320px] h-[52px] flex items-center justify-between rounded-xl border border-lightBorderColor bg-lightBgColor px-5 mr-5'>
                        <input type="text" className='w-[90%] bg-transparent outline-none font-medium text-base' placeholder='Поиск'/>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.80553 16.2959C12.9424 16.2959 16.296 12.9423 16.296 8.80541C16.296 4.66854 12.9424 1.31494 8.80553 1.31494C4.66866 1.31494 1.31506 4.66854 1.31506 8.80541C1.31506 12.9423 4.66866 16.2959 8.80553 16.2959Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.0153 14.4043L16.9519 17.3334" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='w-[550px] h-[52px] flex items-center border border-lightBorderColor bg-lightBgColor rounded-xl px-5 py-2 mr-5'>
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
                            <span className='text-base font-medium ml-3 mr-6'>Фильтр</span>
                        </button>
                        <button className='flex items-center border-r-2 border-lightBorderColor flex-none'>
                            <span className='text-base font-medium ml-6 mr-3'>Время года</span>
                            <svg className='mr-6' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button className='flex items-center border-r-2 border-lightBorderColor'>
                            <span className='text-base font-medium ml-6 mr-3'>Цвет</span>
                            <svg className='mr-6' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button className='flex items-center'>
                            <span className='text-base font-medium ml-6 mr-3'>Размеры</span>
                            <svg className='mr-6' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <button className='flex items-center h-[52px] border border-lightBorderColor bg-lightBgColor rounded-xl px-5 mr-3'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.59169 4.23333C8.31669 4.01667 9.11669 3.875 10 3.875C13.9917 3.875 17.225 7.10833 17.225 11.1C17.225 15.0917 13.9917 18.325 10 18.325C6.00836 18.325 2.77502 15.0917 2.77502 11.1C2.77502 9.61667 3.22502 8.23333 3.99169 7.08333" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.55835 4.43317L8.96668 1.6665" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.55835 4.43311L9.36668 6.48311" stroke="#D50000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='text-textRedColor font-medium text-base ml-3'>Очистка</span>
                    </button>
                    <button className='flex items-center h-[52px] border border-lightBorderColor bg-lightBgColor rounded-xl px-5'>
                        <span className='text-textBlueColor font-medium text-base '>Фильтровать</span>
                    </button>
                    <button className='flex items-center h-[52px] border border-lightBorderColor bg-lightBgColor rounded-xl px-5 flex-none ml-auto'>
                        <span className='font-medium text-base mr-[52px]'>Сортировать по дате</span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
        <div className='w-full flex flex-col overflow-x-auto'>
            <div className='flex items-center text-2xl font-medium mb-[30px]'>Дата:31 май – 2023</div>
            
            <table className='table w-full rounded-lg overflow-hidden text-center font-medium  border border-lightBorderColor'>
                <thead className='bg-lightBorderColor rounded-t-xl h-12 text-base'>
                    <tr className='rounded-xl'>
                        <th></th>
                        <th>Время</th>
                        <th>Фото</th>
                        <th>Наименование товара</th>
                        <th>Артикул</th>
                        <th>Тип</th>
                        <th>Цвет</th>
                        <th>Размер</th>
                        <th>Кол-во</th>
                        <th>Цена товара</th>
                        <th>Скидка</th>
                        <th className='flex justify-center items-center h-12'>
                            <button className='w-10 h-10 flex items-center justify-center border border-darkerBorderColor rounded-full bg-white py-1'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className='text-lg'>
                    <tr className=' border-b border-lightBorderColor py-1'>
                        <td></td>
                        <td>16:43</td>
                        <td className='w-[72px] h-[72px] my-2 rounded-xl bg-slate-100'> 
                        </td>
                        <td className='w-[15%]'>Спортивная мужская кроссовка Nike RUN</td>
                        <td>BAA-00004</td>
                        <td>Футболка</td>
                        <td>Color</td>
                        <td>4XL</td>
                        <td>2 шт</td>
                        <td>452 000 сум</td>
                        <td>-226 000 сум</td>
                        <td>profile</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>16:43</td>
                        <td className='w-[72px] h-[72px] my-2 rounded-xl bg-slate-100'> 
                        </td>
                        <td className='w-[15%]'>Спортивная мужская кроссовка Nike RUN</td>
                        <td>BAA-00004</td>
                        <td>Футболка</td>
                        <td>Color</td>
                        <td>4XL</td>
                        <td>2 шт</td>
                        <td>452 000 сум</td>
                        <td>-226 000 сум</td>
                        <td>profile</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
        <div class="flex flex-col overflow-x-auto">
            <div class="sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-x-auto">

                        <div className='flex items-center text-2xl font-medium mb-[30px]'>Дата:31 май – 2023</div>
                        <table className='w-full table-auto text-center font-medium rounded-xl overflow-hidden border'>
                            <thead className='bg-lightBorderColor rounded-t-xl h-12 text-base'>
                                <tr className='rounded-xl'>
                                    <th>Время</th>
                                    <th>Фото</th>
                                    <th>Наименование товара</th>
                                    <th>Артикул</th>
                                    <th>Тип</th>
                                    <th>Цвет</th>
                                    <th>Размер</th>
                                    <th>Кол-во</th>
                                    <th>Цена товара</th>
                                    <th>Скидка</th>
                                    <th>
                                        <div className='w-10 h-10 flex items-center justify-center border border-darkerBorderColor rounded-full bg-white py-1'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='text-lg'>
                                <tr>
                                    <td className='py-2'>16:43</td>
                                    <td className='w-[72px] h-[72px] my-2 rounded-xl bg-slate-100'> 
                                    </td>
                                    <td className='w-[15%]'>Спортивная мужская кроссовка Nike RUN</td>
                                    <td>BAA-00004</td>
                                    <td>Футболка</td>
                                    <td>Color</td>
                                    <td>4XL</td>
                                    <td>2 шт</td>
                                    <td>452 000 сум</td>
                                    <td>-226 000 сум</td>
                                    <td>profile</td>
                                </tr>
                                <tr>
                                    <td>16:43</td>
                                    <td className='w-[72px] h-[72px] my-2 rounded-xl bg-slate-100'> 
                                    </td>
                                    <td className='w-[15%]'>Спортивная мужская кроссовка Nike RUN</td>
                                    <td>BAA-00004</td>
                                    <td>Футболка</td>
                                    <td>Color</td>
                                    <td>4XL</td>
                                    <td>2 шт</td>
                                    <td>452 000 сум</td>
                                    <td>-226 000 сум</td>
                                    <td>profile</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
