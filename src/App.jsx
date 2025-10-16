import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './Components/TaskList'
import Taskform from './Components/Taskform'
import Progresstracker from './Components/Progresstracker'

function App() {
  const [count, setCount] = useState(0)

  const [tasks, setTasks] = useState([]);

  useEffect(() =>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  });
  
const addTask = (task) => {
setTasks([...tasks,task]);
}

  return (
    <>
      <h1>HABIT HARBOR</h1>
      <h4>A Task Managing app</h4>
     <Taskform addTask={addTask}/>
     <TaskList/>
     <Progresstracker/>
     <button>Clear All Tasks</button>
    </>
  )
}

export default App
