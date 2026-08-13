import { Link } from "react-router-dom";

function Sidebar(){
    const menuItems = [
        {
            id: 1,
            title: "Workspace",
            icon: "fa-solid fa-cubes"
        },
        {
            id: 2,
            title: "Sprint",
            icon: "fa-solid fa-calendar-check"
        },
        {
            id: 3,
            title: "Team",
            icon: "fa-solid fa-users"
        },
        {
            id: 4,
            title: "Settings",
            icon: "fa-solid fa-gear"
        }
    ];
    const showTab = (id:string) => {
        const elements = document.getElementsByClassName("menu");
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("highlight-menu");
        }   
        document.getElementById(id)?.classList.add("highlight-menu");
    };
    return (
        <div className="fs-5 border-end text-center pt-4">
            <div className="mb-5">
                <h4 className="fw-bold"><Link to="/dashboard" className="text-dark"><i className="fa-solid fa-d"></i></Link></h4>
            </div>
            {
                menuItems.map((item) => {
                    return (
                        <div key={item.id}  id = {`menu${item.id}`} className="mt-3 ps-1 menu" role="button" onClick={() => showTab(`menu${item.id}`)}>
                            <Link to = {item.title.toLowerCase()} className="text-dark text-decoration-none">
                                <i className={item.icon}></i>
                                <div className="mt-1">{item.title}</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar;