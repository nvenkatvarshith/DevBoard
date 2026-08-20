import { createContext } from "react";

export type PriorityLevel = "High" | "Medium" | "Low";
export type SprintStatus = "completed" | "active" | "planned";

export interface Assignee {
  name: string;
  avatar: string;
}

export interface SprintMetrics {
  totalStoryPoints: number;
  completedStoryPoints: number;
  totalTasks: number;
  completedTasks: number;
}

export interface Sprint {
  id: string;
  name: string;
  goal: string;
  status: SprintStatus;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
  metrics: SprintMetrics;
  // Optional fields, as they are not present on all sprint objects
  aiRetrospective?: string; 
  assignedTasks?: string[];
}

export interface Task {
  id: string;
  sprintId: string;
  title: string;
  description: string;
  priority: PriorityLevel;
  storyPoints: number;
  tags: string[];
  // Union type to handle explicitly unassigned tasks (null)
  assignee: Assignee | null;
  // Union type to handle tasks without AI context
  aiContext: string | null;
}

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface SprintBoard {
  columns: Record<string, Column>;
  columnOrder: string[];
}


export interface DevBoardState {
  sprints: Record<string, Sprint>;
  tasks: Record<string, Task>;
  boards: Record<string, SprintBoard>;
}

const SprintContext = createContext({
    devBoardState: {}
});

export default SprintContext;