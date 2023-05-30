import Clients from "../../views/Clients/Clients";
import OnlineChat from "../../views/OnlineChat/OnlineChat";
import Orders from "../../views/Orders/Orders";
import Products from "../../views/Products/Products";
import RouterList from "../../views/RouterList";
import Sale from "../../views/Sale/Sale";
import Settings from "../../views/Settings/Settings";
import Shop from "../../views/Shop/Shop";
import Statistics from "../../views/Statistics/Statistics";
import Header from "./header/Header";
import {Routes, Route} from 'react-router-dom'


export default function Main() {
  return (
    <div className='w-full flex flex-col items-center'>
        <Header/>
        <RouterList />
    </div>
  )
}
