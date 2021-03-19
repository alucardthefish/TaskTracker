//import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  
  const noTaskMsg = 'No Tasks To Show';
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30pm',
        remainder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        remainder: true,
    },
    {
        id: 3,
        text: 'Food shoping',
        day: 'Feb 5th at 2:30pm',
        remainder: true,
    }
])

// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = { id, ...task };
  setTasks([...tasks, newTask]);
}

// Delet Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (noTaskMsg) }
    </div>
  );
}

/* class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
} */

export default App;
