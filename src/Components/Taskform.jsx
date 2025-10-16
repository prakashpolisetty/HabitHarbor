import { useState } from "react"

export default function Taskform({addTask}) {
  const [task,setTask] = useState('');
  const [priority , setPriority] = useState('');
  const [select,setSelect] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    addTask({text: task,priority,select,completed:false});


    setTask('');
    setPriority('');
    setSelect('');
  }
    return(
        <>
        <form onSubmit={handlesubmit}>
      <h1>This is Taskform</h1>
      
      <input type="text" placeholder="Enter the task" value={task} onChange={(e) => setTask(e.target.value)} />
     

      <label for="level">   Level</label>
<select value={priority} id="level" name="check"  onChange={(e) => setPriority(e.target.value)}>
  <option value="High">High</option>
  <option value="Medium" selected>Medium</option>
  <option value="Low">Low</option>
</select>

<label for="purpose">   Purpose</label>
<select value={select} id="purpose" name="pur"  onChange={(e) => setSelect(e.target.value)}>
  <option value="work">Work</option>
  <option value="personal Use" selected>Personal Use</option>
  <option value="general">General</option>
</select>
<h1>{task} {priority} {select}</h1>
 <button>Add Task</button>
 </form>
        </>
    )
}