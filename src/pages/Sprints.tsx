function Sprints(){
    const sprintsData = [
            {
                id: "spr-001",
                name: "Sprint 1: Core Authentication",
                goal: "Implement secure login/signup flows with OAuth integration.",
                status: "completed",
                startDate: "2026-07-01T00:00:00Z",
                endDate: "2026-07-14T23:59:59Z",
                metrics: {
                totalStoryPoints: 45,
                completedStoryPoints: 45,
                totalTasks: 12,
                completedTasks: 12
                },
                aiRetrospective: "Sprint completed successfully. The team maintained a stable velocity, though OAuth integration took 15% longer than estimated."
            },
            {
                id: "spr-002",
                name: "Sprint 2: Kanban Foundation",
                goal: "Build drag-and-drop board, routing, and basic CRUD for tasks.",
                status: "active",
                startDate: "2026-08-01T00:00:00Z",
                endDate: "2026-08-14T23:59:59Z",
                metrics: {
                totalStoryPoints: 50,
                completedStoryPoints: 32,
                totalTasks: 18,
                completedTasks: 10
                },
                // In a real app, this might just be an array of task IDs fetched separately,
                // but included here for a complete view of the sprint's scope.
                assignedTasks: [
                "task-451", 
                "task-452", 
                "task-453"
                ]
            },
            {
                id: "spr-003",
                name: "Sprint 3: AI Integration",
                goal: "Integrate LLM for auto-task breakdown and summarization features.",
                status: "planned",
                startDate: "2026-08-15T00:00:00Z",
                endDate: "2026-08-28T23:59:59Z",
                metrics: {
                totalStoryPoints: 60,
                completedStoryPoints: 0,
                totalTasks: 15,
                completedTasks: 0
                },
                assignedTasks: []
            }
    ];

    const formattedDate = (formatDate:string) => {
        let date = new Date(formatDate);
        let daysInWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${date.getDate()}/${month[date.getMonth()+1]}/${date.getFullYear()}(${daysInWeek[date.getDay()]})`;
    };

    const daysRemaining = (start:string,end:string) => {
        let startDate = new Date(start).getTime();
        let endDate = new Date(end).getTime();
        const differenceInMs = endDate - startDate;
        const daysRemaining = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
        return daysRemaining > 0 ? daysRemaining : 0;
    }; 
    
    const getProgress = (total:number, completed:number) => {
        return completed > 0? `${(completed/total)*100}%` : 0; 
    };

    const getSprintByStatus = (status: string) => {
        return sprintsData.filter((sprint) => {
            return sprint.status === status;
        })
    };
    
    const createSprint = () => {
        console.log("Create Sprint");
    };

    return (
        <div className="mt-4 px-5">
            <div className="d-flex justify-content-between border-bottom pb-3">
                <div>
                    <h3>Dashboard</h3>
                </div>
                <div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="mt-3">
                <div>
                    <div className="d-flex justify-content-between">
                        <h3 className="my-2">Your Active Sprints</h3>
                        <div className="d-grid d-md-block mt-2">
                            <button type="button" className="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#createsprint">
                                Create Sprint
                            </button>

                            <div className="modal fade" id="createsprint" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Sprint</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="sprint-name" className="form-label">Name: </label>
                                                    <input type="text" className="form-control" id="sprint-name"/>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="sprint-goal" className="form-label">Goal: </label>
                                                    <input type="text" className="form-control" id="sprint-goal" />
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-6">
                                                        <label htmlFor="sprint-start" className="form-label">Start Date: </label>
                                                        <input type="date" className="form-control" id="sprint-start" />
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="sprint-start" className="form-label">End Date: </label>
                                                        <input type="date" className="form-control" id="sprint-start" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="sprint-total" className="form-label">Total Story Points: </label>
                                                    <input type="number" className="form-control" id="sprint-total" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="sprint-tasks" className="form-label">Total Tasks: </label>
                                                    <input type="number" className="form-control" id="sprint-tasks" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-dark" onClick={createSprint}>Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-secondary" type="button">AI Sprint Optimizer</button>
                        </div>
                    </div>
                    <div className="row">
                        {getSprintByStatus("active").map((sprint) => {
                            return (
                                <div className="col-3" key={sprint.id}>
                                    <div className="card" style = {{width: "18rem"}}>
                                        <div className="card-body">
                                            <h5 className="card-title">{sprint.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">{sprint.goal}</h6>
                                            <p className="card-text my-1">Start date: {formattedDate(sprint.startDate)}</p>
                                            <p className="card-text my-1">End date: {formattedDate(sprint.endDate)}</p>
                                            <p className="card-text my-1">Days Remaining: {daysRemaining(sprint.startDate,sprint.endDate)}</p>
                                            <div className="progress mt-2" role="progressbar">
                                                <div className="progress-bar bg-black" style={{width: getProgress(sprint.metrics.totalStoryPoints,sprint.metrics.completedStoryPoints)}}>{getProgress(sprint.metrics.totalStoryPoints,sprint.metrics.completedStoryPoints)}</div>
                                            </div>
                                            <button className="btn btn-dark w-100 mt-3">Go to Board</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="my-4">
                    <h3>Upcoming Sprints</h3>
                    {getSprintByStatus("planned").map((sprint) => {
                        return (
                            <div className="accordion" id={`accordioncollapse${sprint.id}`} key={sprint.id}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${sprint.id}`} aria-expanded="true" aria-controls={`collapse${sprint.id}`}>
                                            {sprint.name}
                                        </button>
                                    </h2>
                                        <div id={`collapse${sprint.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <h6 className="mb-2 text-body-secondary">{sprint.goal}</h6>
                                            <p className="my-1">Start date: {formattedDate(sprint.startDate)}</p>
                                            <p className="my-1">End date: {formattedDate(sprint.endDate)}</p>
                                            <p className="my-1">Days Remaining: {daysRemaining(sprint.startDate,sprint.endDate)}</p>
                                            <p className="my-1">Total Story Points: {sprint.metrics.totalStoryPoints}</p>
                                            <p className="my-1">Total Tasks: {sprint.metrics.totalTasks}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="my-3">
                    <h3>Completed Sprints</h3>
                    {getSprintByStatus("completed").map((sprint) => {
                        return (
                            <div key={sprint.id}>
                                <p className="d-inline-flex gap-1">
                                    <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${sprint.id}`} aria-expanded="false" aria-controls={`collapse${sprint.id}`}>
                                        {sprint.name}
                                    </button>
                                </p>
                                <div className="collapse" id={`collapse${sprint.id}`}>
                                    <div className="card card-body">
                                        <h6 className="card-subtitle mb-2 text-body-secondary">{sprint.goal}</h6>
                                        <p className="card-text my-1">Start date: {formattedDate(sprint.startDate)}</p>
                                        <p className="card-text my-1">End date: {formattedDate(sprint.endDate)}</p>
                                        <div className="d-flex column-gap-4">
                                            <p className="card-text my-1">Total Story Points: {sprint.metrics.totalStoryPoints}</p>
                                            <p className="card-text my-1">Completed Story Points: {sprint.metrics.completedStoryPoints}</p>
                                        </div>
                                        <div className="d-flex column-gap-4">
                                            <p className="card-text my-1">Total Tasks: {sprint.metrics.totalTasks}</p>
                                            <p className="card-text my-1">Completed Tasks: {sprint.metrics.completedTasks}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>  
            </div>
        </div>
    );
}

export default Sprints;