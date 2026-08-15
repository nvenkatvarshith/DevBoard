import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashboard(){
    return (
        <div className='row w-100'>
            <div className='col-1'>
                <Sidebar />
            </div>
            <div className='col-11'>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;