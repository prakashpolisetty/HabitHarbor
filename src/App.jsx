import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './Components/TaskList'
import Taskform from './Components/Taskform'
import Progresstracker from './Components/Progresstracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HABIT HARBOR</h1>
      <h4>A Task Managing app</h4>
     <Taskform/>
     <TaskList/>
     <Progresstracker/>
     <button>Clear All Tasks</button>
    </>
  )
}

export default App
