export default function Taskform() {
    return(
        <>
      <h1>This is Taskform</h1>
      <input type="text" placeholder="Enter the task"/>
     

      <label for="level">   Level</label>
<select id="level" name="check">
    <option value="normal">Select</option>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>

<label for="purpose">   Purpose</label>
<select id="purpose" name="pur">
    <option value="normal">Select</option>
  <option value="work">Work</option>
  <option value="personal">Personal Use</option>
  <option value="general">General</option>
</select>

 <button>Add Task</button>
        </>
    )
}