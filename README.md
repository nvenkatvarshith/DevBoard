# DevBoard: AI-Powered Agile Architect

A modern, interactive Agile project management dashboard built with React. It goes beyond a standard Kanban board by integrating an AI assistant designed to help developers break down complex features, summarize dense technical discussions, and unblock code errors directly within the project workflow.

## 🚀 Demo Screenshots
<img width="1919" height="577" alt="photo-1" src="https://github.com/user-attachments/assets/b703328d-2130-4a19-ba8c-654eda5a1ecd" />
<img width="1917" height="766" alt="photo-2" src="https://github.com/user-attachments/assets/71df4d65-a966-4548-af2a-fc5699a5fce1" />
<img width="1919" height="869" alt="photo-3" src="https://github.com/user-attachments/assets/15163e4b-b650-4767-8c0e-ae04a7d980ed" />
<img width="1919" height="920" alt="photo-4" src="https://github.com/user-attachments/assets/972e33ce-6139-4ce1-b893-3671f83860a9" />
<img width="1919" height="817" alt="photo-5" src="https://github.com/user-attachments/assets/4addbd08-4bb5-40a6-a240-99836a0a90c6" />
<img width="1919" height="684" alt="photo-6" src="https://github.com/user-attachments/assets/1c1f89de-54a6-4020-84fa-854aac945c48" />
<img width="1914" height="775" alt="photo-7" src="https://github.com/user-attachments/assets/eae04298-eda3-45d8-9f79-e16435ca7c67" />
<img width="1919" height="874" alt="photo-8" src="https://github.com/user-attachments/assets/8789cd57-36fa-4d95-9be3-bc2d0306f0b0" />
<img width="1919" height="858" alt="photo-9" src="https://github.com/user-attachments/assets/9ae9443e-21e6-406c-bf3a-7f7550c59191" />

## 🛠️ Technologies Used
* **React** (Functional Components & Hooks)
* **TypeScript**
* **React Router v6**
* **@dnd-kit/react** (Drag and Drop)
* **Tailwind CSS / CSS Modules**
* **OpenAI API** (AI Integration)

## ✨ Features
* **Interactive Kanban Board:** Drag-and-drop task cards between status columns (Backlog, In Progress, Code Review, Done) with optimistic UI updates.
* **Complex Task Management:** Full CRUD capabilities for task cards including priority badges, assignees, tags, and Fibonacci-scale story point estimation.
* **Normalized State Structure:** Optimized data layer using a dictionary-based normalized state to prevent unnecessary re-renders.
* **AI Auto-Breakdown:** Input a broad "Epic", and the AI automatically generates an array of smaller, actionable sub-tasks.
* **AI Smart Summarization:** One-click summarization of lengthy technical task descriptions or comment histories.
* **Context-Aware Unblocking:** Paste an error log into a task card, and the AI analyzes the code context to suggest debugging steps.
* **Workspace & Sprint Management:** Multi-page routing and visual progress bars tracking story point completion against the overarching sprint goal.

## 💻 Setup and Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nvenkatvarshith/DevBoard
2. **Navigate to the project directory:**
   cd devboard
3. **Install dependencies:**
   npm install
4. **Set up Environment Variables:**
   OPEN_AI_API_KEY=your_api_key_here
5. **Start the development server:**
   npm run dev
