/* eslint-disable no-lone-blocks */
import Main from "./components/main";
import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="w-full">
            <div className="w-full h-[100vh] flex justify-between">
                <div className="w-[16%] border-r border-lightBorderColor bg-lightBgColor">
                    <Sidebar />
                </div>
                <div className="w-[84%]">
                    <Main />
                </div>
            </div>
        </div>

    </BrowserRouter>
    
  );
}

export default App;

        
        
