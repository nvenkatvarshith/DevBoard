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
                            <button className="btn btn-outline-success me-2" type="button">Create Sprint</button>
                            <button className="btn btn-secondary" type="button">AI Sprint Optimizer</button>
                        </div>
                    </div>
                    <div className="row">
                        {sprintsData.map((sprint) => {
                            return (
                                <div className="col-3">
                                    {sprint.id}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h3 className="my-2">Upcoming Sprints</h3>
                </div>
                <div>
                    <h3 className="my-2">Completed Sprints</h3>
                </div>
            </div>
        </div>
    );
}

export default Sprints;