function TaskItem({ item, deletetasks, updatetasks }) {
  return (
    <div>
      <h2>Title is : {item.task}</h2>
      <h3>Assigned to : {item.taskAssignedTo}</h3>
      <button onClick={()=>{updatetasks(item.id)}}>{item.completed == true ? "Completed" : "Pending"}</button>
      <button
        onClick={() => {
          deletetasks(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
