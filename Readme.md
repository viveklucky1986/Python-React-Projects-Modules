# Python React Zustand Visual Pipeline Builder

This project implements a **visual pipeline editor** with a React frontend and a FastAPI backend.
Users can create nodes, connect them into a pipeline, and validate whether the pipeline forms a **Directed Acyclic Graph (DAG)**.

---

## 1. Prerequisites

You need **only these tools** installed on your machine:

### Required

* **Node.js** (v18 or later)
  [https://nodejs.org](https://nodejs.org)
* **Python** (v3.9 or later)
  [https://www.python.org](https://www.python.org)
* **Git** (optional, if cloning)

### Supported OS

* Windows 11 x64 (tested)
* macOS / Linux should also work with equivalent commands

---

## 2. Project Structure

```
project-root/
├── frontend/     # React + React Flow UI
└── backend/      # FastAPI backend
```

You must run **both frontend and backend** for the project to work.

---

## 3. Backend Setup & Run

### Step 1: Open a terminal in the `backend` folder

```powershell
cd backend
```

### Step 2: Create and activate virtual environment (once)

```powershell
python -m venv .venv
.\.venv\Scripts\activate
```

### Step 3: Install backend dependencies

```powershell
pip install fastapi uvicorn
```

### Step 4: Run the backend

```powershell
uvicorn main:app --reload
```

### Verify backend is running

Open in browser:

```
http://localhost:8000
```

You should be redirected to:

```
http://localhost:8000/docs
```

This confirms the backend is running correctly.

---

## 4. Frontend Setup & Run

### Step 1: Open a **new terminal** in the `frontend` folder

```powershell
cd frontend
```

### Step 2: Install frontend dependencies

```powershell
npm install
```

### Step 3: (Optional but recommended)

```powershell
npm audit fix
```

### Step 4: Start the frontend

```powershell
npm start
```

The app will open automatically at:

```
http://localhost:3000
```

---

## 5. How to Use the App

### Create a pipeline

1. Use the toolbar to add nodes:

   * Input
   * Text
   * LLM
   * Output
2. Drag connections between nodes (left → right).

### Text node behavior

* Type variables using `{{variableName}}`
* Each variable creates a new input handle dynamically.

Example:

```
Hello {{name}} {{date}}
```

### Delete nodes

* Select a node → press **Delete / Backspace**
* Select multiple nodes → **Delete**
* **Ctrl + A** → select all → **Delete**

### Validate pipeline

* Click **Submit**
* An alert shows:

  * Number of nodes
  * Number of edges
  * Whether the pipeline is a valid DAG

---

## 6. What the Backend Does

The backend:

* Receives the pipeline graph
* Checks if it is a **Directed Acyclic Graph (DAG)** using a standard algorithm
* Returns validation results to the frontend

---

## 7. Common Issues

### Backend shows “Not Found” at `/`

This is expected.
Use `/docs` to verify backend status.

### Frontend cannot connect to backend

Ensure:

* Backend is running on port `8000`
* Frontend is running on port `3000`
* Both terminals are active

---

## 8. Notes

* This project is intentionally simple and extensible.
* UI behavior mirrors real workflow builders.
* Code is structured for clarity and interview discussion.

---

## 9. Done

Once both servers are running, the project is fully functional.
