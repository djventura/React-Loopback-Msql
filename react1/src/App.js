import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EmployeeList from "./Components/EmployeeList";
import EmployeeInput from "./Components/EmployeeInput";
import EmployeeDelete from "./Components/EmployeeDelete";
import EmployeeUpdate from "./Components/EmployeeUpdate";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <h2>Add new Employee:</h2>
      <EmployeeInput />
      <h2>New Employees:</h2>
      <EmployeeList />
      <h2>Delete Employee:</h2>
      <EmployeeDelete />
      <h2>Update Employee:</h2>
      <EmployeeUpdate />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <PersonList />
//       </div>
//     );
//   }
// }

export default App;
