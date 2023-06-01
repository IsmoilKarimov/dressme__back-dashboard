import { Link } from "react-router-dom"
import ProfileIcon from "../../../assets/"

const ClientsBreadCrumb = () => {
  return (
    <div className="w-full py-3 border border-solid border-lightBorderColor bg-lightBgColor px-10 ">
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <Link to='/' className="flex items-center">
                    <div className="text-lg font-medium">Главная</div>
                    <svg className="mx-[14px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.74 15.53L14.26 12L10.74 8.47003" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
                <Link to='/clients' className="flex items-center">
                    <div className="text-lg font-medium">Клиенты</div>
                </Link>
            </div>
            <div className="flex items-center">
                <Link to='/search' className="flex items-center justify-center w-14 h-14 rounded-full border border-borderColor bg-white mr-5">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.80553 16.2959C12.9424 16.2959 16.296 12.9423 16.296 8.80541C16.296 4.66854 12.9424 1.31494 8.80553 1.31494C4.66866 1.31494 1.31506 4.66854 1.31506 8.80541C1.31506 12.9423 4.66866 16.2959 8.80553 16.2959Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.0153 14.4043L16.9519 17.3334" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
                <Link to='/notification' className="flex items-center justify-center w-14 h-14 rounded-full border border-borderColor bg-white mr-5">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0183 2.66748C7.98413 2.66748 5.51829 5.13331 5.51829 8.16748V10.8166C5.51829 11.3758 5.27996 12.2283 4.99579 12.705L3.94163 14.4558C3.29079 15.5375 3.73996 16.7383 4.93163 17.1416C8.88246 18.4616 13.145 18.4616 17.0958 17.1416C18.205 16.775 18.6908 15.4641 18.0858 14.4558L17.0316 12.705C16.7566 12.2283 16.5183 11.3758 16.5183 10.8166V8.16748C16.5183 5.14248 14.0433 2.66748 11.0183 2.66748Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M12.7142 2.93332C12.43 2.85082 12.1367 2.78665 11.8342 2.74999C10.9542 2.63999 10.1108 2.70415 9.32251 2.93332C9.58834 2.25499 10.2483 1.77832 11.0183 1.77832C11.7883 1.77832 12.4483 2.25499 12.7142 2.93332Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.7683 17.4717C13.7683 18.9842 12.5308 20.2217 11.0183 20.2217C10.2666 20.2217 9.56998 19.91 9.07498 19.415C8.57998 18.92 8.26831 18.2233 8.26831 17.4717" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
                    </svg>
                </Link>
                <Link to='/profile' className="flex items-center justify-center w-14 h-14 rounded-full border border-borderColor bg-white">
                    <svg 
                    width="16" 
                    height="20" 
                    viewBox="0 0 16 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path  
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M7.98481 13.3462C4.11719 13.3462 0.814331 13.931 0.814331 16.2729C0.814331 18.6148 4.09624 19.2205 7.98481 19.2205C11.8524 19.2205 15.1543 18.6348 15.1543 16.2938C15.1543 13.9529 11.8734 13.3462 7.98481 13.3462Z" 
                        stroke="black" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                        <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M7.98479 10.0059C10.5229 10.0059 12.58 7.94779 12.58 5.40969C12.58 2.8716 10.5229 0.814453 7.98479 0.814453C5.4467 0.814453 3.38858 2.8716 3.38858 5.40969C3.38003 7.93922 5.42384 9.99731 7.95241 10.0059H7.98479Z" 
                        stroke="black" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                    </svg>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ClientsBreadCrumb
