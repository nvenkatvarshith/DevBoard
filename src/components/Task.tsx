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
}

function Task(props:TaskCardProps){
    const {task} = props;
    const getPriorityStyle = (priority: PriorityLevel) => {
        switch(priority){
            case "High": return "danger"
            case "Medium": return "warning"
            case "Low": return "info"
        }
    };
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <h6 className={`card-subtitle mb-2 text-${getPriorityStyle(task.priority)}`}>{task.priority}</h6>
                    <div className="mt-1">
                        <div className="mb-2 fw-semibold">{task.assignee?.name}</div>
                        {task.tags.map((tag) => {
                            return (
                                <span className="bg-secondary-subtle rounded-3 me-2 px-3 py-1" key={tag}>{tag}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task;