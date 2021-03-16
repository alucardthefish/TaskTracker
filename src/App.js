//import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const name = 'Brad';
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

/* class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
} */

export default App;
