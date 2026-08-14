import Task from "../components/Task";
import { useForm } from "react-hook-form"
import { useState } from "react";

function Kanban(){
    type PriorityLevel = "High" | "Medium" | "Low";

    interface Assignee {
    name: string;
    avatar: string;
    }

    interface Task {
    id: string;
    title: string;
    description: string;
    priority: PriorityLevel;
    storyPoints: number;
    tags: string[];
    assignee: Assignee | null;
    aiContext: string | null;
    }

    interface Column {
    id: string;
    title: string;
    taskIds: string[];
    }

    interface BoardData {
    tasks: Record<string, Task>;
    columns: Record<string, Column>;
    columnOrder: string[];
    }

    const {register, handleSubmit, formState: { errors }} = useForm();

    const [mockBoardData,setMockBoardDate] = useState<BoardData>({
            tasks: {
                "task-451": {
                    id: "task-451",
                    title: "Implement error boundary for AI module",
                    description: "Create a fallback UI to prevent the whole board from crashing if the LLM API returns a malformed response.",
                    priority: "High",
                    storyPoints: 5,
                    tags: ["Frontend", "Bug"],
                    assignee: {
                        name: "Alex Chen",
                        avatar: "https://i.pravatar.cc/150?u=alex"
                    },
                    aiContext: "Error logs show occasional JSON parse failures from the streaming endpoint."
                },
                "task-452": {
                    id: "task-452",
                    title: "Optimize LLM response caching",
                    description: "Implement local storage caching so identical task generation requests don't hit the API twice.",
                    priority: "Medium",
                    storyPoints: 8,
                    tags: ["Performance", "AI"],
                    assignee: {
                        name: "Sarah Jenkins",
                        avatar: "https://i.pravatar.cc/150?u=sarah"
                    },
                    aiContext: null
                },
                "task-453": {
                    id: "task-453",
                    title: "Design system dark mode toggle",
                    description: "Wire up the global theme context to support dark mode across the Kanban board.",
                    priority: "Low",
                    storyPoints: 3,
                    tags: ["UI/UX", "Frontend"],
                    assignee: {
                        name: "Alex Chen",
                        avatar: "https://i.pravatar.cc/150?u=alex"
                    },
                    aiContext: null
                },
                "task-454": {
                    id: "task-454",
                    title: "Secure OAuth callback routes",
                    description: "Ensure the GitHub and GitLab OAuth redirects are properly validated to prevent CSRF attacks.",
                    priority: "High",
                    storyPoints: 13,
                    tags: ["Security", "Backend"],
                    assignee: {
                        name: "David Kim",
                        avatar: "https://i.pravatar.cc/150?u=david"
                    },
                    aiContext: null
                },
                "task-455": {
                    id: "task-455",
                    title: "Setup CI/CD pipeline",
                    description: "Configure GitHub Actions to run Jest tests and deploy to Vercel on main branch merge.",
                    priority: "Medium",
                    storyPoints: 5,
                    tags: ["DevOps"],
                    assignee: null, // Example of an unassigned task
                    aiContext: null
                }
            },
            columns: {
                "col-backlog": {
                    id: "col-backlog",
                    title: "BACKLOG",
                    taskIds: ["task-455", "task-453"] 
                },
                "col-in-progress": {
                    id: "col-in-progress",
                    title: "IN PROGRESS",
                    taskIds: ["task-452"]
                },
                "col-code-review": {
                    id: "col-code-review",
                    title: "CODE REVIEW",
                    taskIds: ["task-454"]
                },
                "col-done": {
                    id: "col-done",
                    title: "DONE",
                    taskIds: ["task-451"]
                }
            },

            // 3. The Column Order: Dictates the horizontal order of columns on the board
            columnOrder: ["col-backlog", "col-in-progress", "col-code-review", "col-done"]
        });
    
    const createTask =  (data:any) => {
        let newTask = {
            id: `task-${Object.keys(mockBoardData.tasks).length+1}`,
            title: data.title,
            description: data.description,
            priority: data.priority,
            storyPoints: Number(data.storyPoints),
            tags: data.tags.split(","),
            assignee: {
                name: data.assignee,
                avatar: ""
            },
            aiContext: ""
        };
        mockBoardData.tasks[newTask.id] = newTask;
        mockBoardData.columns["col-backlog"].taskIds.push(newTask.id);
        setMockBoardDate(mockBoardData);
    };
        
    return (
        <div className="mt-3 mx-3">
            <div className="d-flex justify-content-between border-bottom pb-3">
                <div>
                    <h2>Project: AI Integration</h2>
                </div>
                <div className="d-flex">
                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    <i className="fa-solid fa-plus"></i>
                    </button>

                    <div className="offcanvas offcanvas-end" data-bs-backdrop="static" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="staticBackdropLabel">Create New Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                <form onSubmit={handleSubmit(createTask)}>
                                    <div className="mb-2">
                                        <label htmlFor="title" className="form-label">Task title<span className='text-danger'>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            placeholder="Enter Task title"
                                            {...register('title', { 
                                                required: { value: true, message: 'Title is required' }
                                            })}
                                        />
                                        {errors.title?.message && <p className="text-danger small mb-0">{String(errors.title.message)}</p>}
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="description" className="form-label">Task description</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            placeholder="Enter Task description"
                                            {...register('description')}
                                        />
                                    </div>
                                    <div className="mb-2 d-flex column-gap-2 flex-nowrap">
                                        <div>
                                            <label htmlFor="assignee" className="form-label">Assignee<span className='text-danger'>*</span></label>
                                            <select className="form-select"
                                             {...register('assignee', { 
                                                required: { value: true, message: 'Assignee is required' }
                                            })}>
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            {errors.assignee?.message && <p className="text-danger small mb-0">{String(errors.assignee.message)}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="priority" className="form-label">Priority<span className='text-danger'>*</span></label>
                                            <select className="form-select"
                                             {...register('priority', { 
                                                required: { value: true, message: 'Assignee is required' }
                                            })}>
                                                <option value="high">High</option>
                                                <option value="medium">Medium</option>
                                                <option value="low">Low</option>
                                            </select>
                                            {errors.priority?.message && <p className="text-danger small mb-0">{String(errors.priority.message)}</p>}
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="storyPoints" className="form-label">Story points<span className='text-danger'>*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="storyPoints"
                                            placeholder="Enter Story points"
                                            {...register('storyPoints', { 
                                                required: { value: true, message: 'StoryPoints is required' }
                                            })}
                                        />
                                        {errors.storyPoints?.message && <p className="text-danger small mb-0">{String(errors.storyPoints.message)}</p>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tags" className="form-label">Task tags</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="tags"
                                            placeholder="Enter Task tags separated by comma"
                                            {...register('tags')}
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-success btn-md">
                                            Create Task
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row column-gap-2 flex-nowrap">
                {mockBoardData.columnOrder.map((column) => {
                    return (
                        <div className="col-lg-3 bg-secondary-subtle pt-2" key={column}>
                            <div className="d-flex justify-content-between">
                                {mockBoardData.columns[column].title}
                                <p className="bg-secondary px-3 py-1 rounded-3 text-light">3</p>
                            </div>
                            <div>
                                {mockBoardData.columns[column].taskIds.map((taskId) => {
                                    return (
                                        <div className="mb-3" key={taskId}>
                                            <Task task = {mockBoardData.tasks[taskId]} key={taskId}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Kanban;