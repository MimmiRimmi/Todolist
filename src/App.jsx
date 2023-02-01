import { useState } from "react";
import "./App.css";
import { TodoItem } from "./TodoItem";

function App() {
  const [list, setList] = useState([]);

  const [taskName, setTaskName] = useState("");

  const printTask = (e) => {
    setTaskName(e.target.value);
  };

  function createTask() {
    const task = {
      id: list.length + 1,
      taskName: taskName,
      completed: false,
    };
    setList([...list, task]);
  }

  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setList(
      list.map((task) => {
        if (task.id === id) {
          const completed = task.completed;
          return { ...task, completed: !completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="bg-green-200 bg-contain h-screen">
      <div>
        <h1
          className="flex bg-green-600 justify-center py-8
         text-white font-bold text-2xl"
        >
          My To Do List
        </h1>
        <div className="flex justify-center pt-6">
          <input className="p-4 rounded-xl" onChange={printTask} />
          <button
            className="ml-6 border p-4 rounded-xl bg-green-600 text-white hover:bg-green-800 hover:text-slate-200"
            onClick={createTask}
          >
            Save Task
          </button>
        </div>
      </div>
      <div className="list">
        {list.map((task) => {
          return (
            <TodoItem
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
