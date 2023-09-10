import React, { useState } from "react";

function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [arrTask, setArrTask] = useState([]);
  const [editTask, setEditTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const handleAdd = () => {
    console.log(newTask);
    setArrTask([...arrTask, newTask]);
    setNewTask("");
  };

  const handleEdit = (index) => {
    console.log("click on edit");
    setEditingTask(index);
    setEditTask(arrTask[index]);
  };

  const handleDel = (index) => {
  const updateTasks = [...arrTask]
  updateTasks.splice(index, 1)
  setArrTask(updateTasks)
  };

  const handleSave = () => {
    const updateTask = [...arrTask];
    console.log(updateTask);
    updateTask[editingTask] = editTask;
    console.log("updated task", updateTask);
    setArrTask(updateTask);
    setEditingTask(null);
    setEditTask("");
  };
  return (
    <div>
      <h1 className="text-center">Todo List</h1>
      <br />
      <input
        className=""
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        type="text"
      />{" "}
      <br /> <br />
      <button className="btn btn-light" onClick={handleAdd}>
        Add Item
      </button>
      <div className="addListItem">
        <ul>
          {arrTask.map((task, index) => (
            <li key={index}>
              {console.log(`item ${index}`)}
              {index === editingTask ? (
                <>
                  <input
                    className=""
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    type="text"
                  />{" "}
                  <br /> <br />
                  <button className="btn btn-light" onClick={handleSave}>
                    Save Item
                  </button>
                </>
              ) : (
                <>
                  {task}
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDel(index)}>del</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
