//import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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
