import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import {type DevBoardState} from "../SprintContext";
import SprintContext from "../SprintContext";
function Dashboard(){
    
    const [devBoardState,setDevBoardState] = useState<DevBoardState>({
        sprints: {
            "spr-001": {
            id: "spr-001",
            name: "Sprint 1: Core Authentication",
            goal: "Implement secure login/signup flows with OAuth integration.",
            status: "completed",
            startDate: "2026-07-01T00:00:00Z",
            endDate: "2026-07-14T23:59:59Z",
            metrics: { totalStoryPoints: 45, completedStoryPoints: 45, totalTasks: 12, completedTasks: 12 },
            aiRetrospective: "Sprint completed successfully. The team maintained a stable velocity, though OAuth integration took 15% longer than estimated."
            },
            "spr-002": {
            id: "spr-002",
            name: "Sprint 2: Kanban Foundation",
            goal: "Build drag-and-drop board, routing, and basic CRUD for tasks.",
            status: "active",
            startDate: "2026-08-01T00:00:00Z",
            endDate: "2026-08-14T23:59:59Z",
            metrics: { totalStoryPoints: 53, completedStoryPoints: 32, totalTasks: 20, completedTasks: 10 },
            assignedTasks: ["task-451", "task-452", "task-453", "task-454", "task-455", "task-456", "task-457"]
            },
            "spr-003": {
            id: "spr-003",
            name: "Sprint 3: AI Integration",
            goal: "Integrate LLM for auto-task breakdown and summarization features.",
            status: "active",
            startDate: "2026-08-15T00:00:00Z",
            endDate: "2026-08-28T23:59:59Z",
            metrics: { totalStoryPoints: 34, completedStoryPoints: 0, totalTasks: 5, completedTasks: 0 },
            assignedTasks: ["task-501", "task-502", "task-503", "task-504", "task-505"]
            }
        },

        tasks: {
            // --- Sprint 2 Tasks (Existing + 2 New for testing long lists) ---
            "task-451": { id: "task-451", sprintId: "spr-002", title: "Implement error boundary for AI module", description: "Create a fallback UI to prevent the whole board from crashing.", priority: "High", storyPoints: 5, tags: ["Frontend", "Bug"], assignee: { name: "Alex Chen", avatar: "https://i.pravatar.cc/150?u=alex" }, aiContext: "Error logs show occasional JSON parse failures." },
            "task-452": { id: "task-452", sprintId: "spr-002", title: "Optimize LLM response caching", description: "Implement local storage caching.", priority: "Medium", storyPoints: 8, tags: ["Performance", "AI"], assignee: { name: "Sarah Jenkins", avatar: "https://i.pravatar.cc/150?u=sarah" }, aiContext: null },
            "task-453": { id: "task-453", sprintId: "spr-002", title: "Design system dark mode toggle", description: "Wire up the global theme context.", priority: "Low", storyPoints: 3, tags: ["UI/UX", "Frontend"], assignee: { name: "Alex Chen", avatar: "https://i.pravatar.cc/150?u=alex" }, aiContext: null },
            "task-454": { id: "task-454", sprintId: "spr-002", title: "Secure OAuth callback routes", description: "Prevent CSRF attacks on redirects.", priority: "High", storyPoints: 13, tags: ["Security", "Backend"], assignee: { name: "David Kim", avatar: "https://i.pravatar.cc/150?u=david" }, aiContext: null },
            "task-455": { id: "task-455", sprintId: "spr-002", title: "Setup CI/CD pipeline", description: "Configure GitHub Actions.", priority: "Medium", storyPoints: 5, tags: ["DevOps"], assignee: null, aiContext: null },
            "task-456": { id: "task-456", sprintId: "spr-002", title: "Create custom scrollbars for columns", description: "Ensure the Kanban columns have styled, thin scrollbars across all browsers.", priority: "Low", storyPoints: 2, tags: ["UI/UX", "Frontend"], assignee: { name: "Emily Watson", avatar: "https://i.pravatar.cc/150?u=emily" }, aiContext: null },
            "task-457": { id: "task-457", sprintId: "spr-002", title: "Add loading skeletons", description: "Display shimmer skeletons while the Context API initially loads.", priority: "Medium", storyPoints: 3, tags: ["Frontend", "Performance"], assignee: null, aiContext: null },

            // --- Sprint 3 Tasks (Brand New) ---
            "task-501": { id: "task-501", sprintId: "spr-003", title: "Design AI Chat Interface Modal", description: "Build the UI for the contextual AI helper that sits inside the task detail view.", priority: "High", storyPoints: 8, tags: ["Frontend", "UI/UX", "AI"], assignee: { name: "Alex Chen", avatar: "https://i.pravatar.cc/150?u=alex" }, aiContext: null },
            "task-502": { id: "task-502", sprintId: "spr-003", title: "Implement prompt engineering utility", description: "Create a utility function to format user requests into strict JSON-instructed LLM prompts.", priority: "High", storyPoints: 5, tags: ["Backend", "AI"], assignee: { name: "Sarah Jenkins", avatar: "https://i.pravatar.cc/150?u=sarah" }, aiContext: null },
            "task-503": { id: "task-503", sprintId: "spr-003", title: "Setup OpenAI streaming response", description: "Handle SSE (Server-Sent Events) so the AI breakdown types out in real-time.", priority: "High", storyPoints: 13, tags: ["Frontend", "Backend"], assignee: { name: "David Kim", avatar: "https://i.pravatar.cc/150?u=david" }, aiContext: null },
            "task-504": { id: "task-504", sprintId: "spr-003", title: "Track AI token usage", description: "Log token consumption per workspace to prevent billing overruns.", priority: "Medium", storyPoints: 5, tags: ["Database", "DevOps"], assignee: null, aiContext: null },
            "task-505": { id: "task-505", sprintId: "spr-003", title: "Write tests for summarizer hook", description: "Add Jest unit tests for the useAISummary custom hook.", priority: "Low", storyPoints: 3, tags: ["QA", "Frontend"], assignee: { name: "Emily Watson", avatar: "https://i.pravatar.cc/150?u=emily" }, aiContext: null }
        },

        boards: {
            "spr-002": {
            columns: {
                "col-backlog": { id: "col-backlog", title: "BACKLOG", taskIds: ["task-455", "task-453", "task-456", "task-457"] },
                "col-in-progress": { id: "col-in-progress", title: "IN PROGRESS", taskIds: ["task-452"] },
                "col-code-review": { id: "col-code-review", title: "CODE REVIEW", taskIds: ["task-454"] },
                "col-done": { id: "col-done", title: "DONE", taskIds: ["task-451"] }
            },
            columnOrder: ["col-backlog", "col-in-progress", "col-code-review", "col-done"]
            },
            "spr-003": {
            columns: {
                "col-backlog": { id: "col-backlog", title: "BACKLOG", taskIds: ["task-502", "task-504", "task-505"] },
                "col-in-progress": { id: "col-in-progress", title: "IN PROGRESS", taskIds: ["task-501"] },
                "col-code-review": { id: "col-code-review", title: "CODE REVIEW", taskIds: ["task-503"] },
                "col-done": { id: "col-done", title: "DONE", taskIds: [] }
            },
            columnOrder: ["col-backlog", "col-in-progress", "col-code-review", "col-done"]
            }
        }
        });
    return (
        <div className='row w-100'>
            <div className='col-1'>
                <Sidebar />
            </div>
            <div className='col-11'>
                <SprintContext.Provider value={{ devBoardState: devBoardState }}>
                    <Outlet />
                </SprintContext.Provider>
            </div>
        </div>
    );
}

export default Dashboard;