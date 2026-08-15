import { useForm } from "react-hook-form"

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

interface TaskCardProps {
  task: Task;
  updateTask: Function;
}

function Task(props:TaskCardProps){
    const {task, updateTask} = props;
    const {register, handleSubmit, formState: { errors }} = useForm();
    const getPriorityStyle = (priority: PriorityLevel) => {
        switch(priority){
            case "High": return "danger"
            case "Medium": return "warning"
            case "Low": return "info"
        }
    };
    const updateCurrentTask = (data: any) => {
        let updatedTask = {
            id: task.id,
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
        updateTask(updatedTask);
    };
    return (
        <div>
            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target={`#editTask${task.id}`} aria-controls={`editTask${task.id}`}>
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{task.title}</h5>
                        <h6 className={`card-subtitle mb-2 text-${getPriorityStyle(task.priority)}`}>{task.priority}</h6>
                        <div className="mt-1">
                            <div className="mb-2 fw-semibold">{task.assignee?.name}</div>
                            <div className="row flex-nowrap px-3">
                                {task.tags.map((tag) => {
                                    return (
                                        <span className="bg-secondary-subtle rounded-3 me-2 px-3 py-1 col-6" key={tag}>{tag}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" id={`editTask${task.id}`} aria-labelledby={`editTaskLabel${task.id}`}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Edit Task({task.id})</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                       <form onSubmit={handleSubmit(updateCurrentTask)}>
                           <div className="mb-2">
                               <label htmlFor="title" className="form-label">Task title<span className='text-danger'>*</span></label>
                               <input
                                   type="text"
                                   className="form-control"
                                   id="title"
                                   defaultValue = {task.title}
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
                                   defaultValue = {task.description}
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
                                   defaultValue={task.storyPoints}
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
                                   defaultValue={task.tags.toString()}
                                   placeholder="Enter Task tags separated by comma"
                                   {...register('tags')}
                               />
                           </div>
                           <div>
                               <button type="submit" className="btn btn-success btn-md">
                                   Update Task
                               </button>
                           </div>
                       </form>
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default Task;