import Sidebar from "../components/Sidebar";
import Sprints from "./Sprints";

function Dashboard(){
    return (
        <div className='row w-100'>
            <div className='col-1'>
                <Sidebar />
            </div>
            <div className='col-11'>
                <Sprints />
            </div>
        </div>
    );
}

export default Dashboard;