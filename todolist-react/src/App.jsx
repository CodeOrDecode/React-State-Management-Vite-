import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "",
    completed: false,
    taskAssignedTo: "",
  });

  function handleChange(event) {
    let value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;

    let newobj = {
      ...formState,
      [event.target.name]: value,
    };
    setFormState(newobj);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let updatedobj = {
      ...formState,
      id: Date.now() + Math.random(),
    };

    let updatedarray = [...tasks, updatedobj];
    setTasks(updatedarray);
    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }

  function deletetasks(value) {
    let deleteget = tasks.filter((ele) => {
      if (ele.id != value) {
        return ele;
      }
    });
    setTasks(deleteget);
  }

  function updatetasks(value){
    let changeoppo = tasks.map((ele)=>{
      if(ele.id == value){
        ele.completed = !ele.completed;
        return ele;
      }
      else{
        return ele;
      }
    })
    setTasks(changeoppo);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            placeholder="Add Task"
            onChange={handleChange}
            value={formState.task}
          />
          <label>
            Completed:
            <input
              name="completed"
              type="checkbox"
              onChange={handleChange}
              checked={formState.completed}
            />
          </label>
          <select
            name="taskAssignedTo"
            onChange={handleChange}
            value={formState.taskAssignedTo}
          >
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} deletetasks={deletetasks} updatetasks={updatetasks}/>
      ))}
    </>
  );
}

export default App;
