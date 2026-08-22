import Task from "../components/Task";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { useDroppable,DragDropProvider } from '@dnd-kit/react';
import SprintContext from "../SprintContext";
import { useParams } from 'react-router-dom';

function Kanban(){
    const data = useContext(SprintContext);
    const { sprintid } = useParams();

    const {register, handleSubmit, formState: { errors }} = useForm();

    const [mockBoardData,setMockBoardDate] = useState({
            tasks: data.devBoardState.tasks,
            boards: data.devBoardState.boards[sprintid]
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
        mockBoardData.boards.columns["col-backlog"].taskIds.push(newTask.id);
        setMockBoardDate(mockBoardData);
        document.querySelector<HTMLElement>('#staticBackdrop .btn-close')?.click();
    };
    
    const updateTask = (updatedTask:any) => {
        setMockBoardDate((prevData: any) => ({
            ...prevData,
            tasks: {
                ...prevData.tasks,
                [updatedTask.id]: updatedTask
            }
        }));
        document.querySelector<HTMLElement>(`#editTask${updatedTask.id} .btn-close`)?.click();
    }

    return (
        <DragDropProvider
            onDragStart={({operation}) => {
                console.log('Started dragging', operation.source?.id);
            }}

            onDragEnd={({operation}) => {
                const {source, target} = operation;
                console.log(source?.id, target);
                if (target) {
                    console.log(`Dropped ${source?.id} onto ${target.id}`);
                }
            }}
        >
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
                    {mockBoardData.boards.columnOrder.map((column:any) => {
                        const columnData = mockBoardData.boards.columns[column];
                        const {isDropTarget, ref} = useDroppable({
                            id: columnData.id,
                        });
                        return (
                            <div className={`col-lg-3 pt-2 ${isDropTarget? 'bg-secondary': 'bg-secondary-subtle'}`} key={column} ref={ref} id={columnData.id}>
                                <div className="d-flex justify-content-between">
                                    {columnData.title}
                                    <p className="bg-secondary px-3 py-1 rounded-3 text-light">3</p>
                                </div>
                                <div>
                                    {columnData.taskIds.map((taskId:any) => {
                                        return (
                                            <div className="mb-3" key={taskId} id={taskId}>
                                                <Task task = {mockBoardData.tasks[taskId]} updateTask = {updateTask} key={taskId}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </DragDropProvider>
    )
}

export default Kanban;