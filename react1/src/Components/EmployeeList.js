import React from "react";
import axios from "axios";

export default class EmployeeList extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    axios.get("http://localhost:3000/api/employees").then(res => {
      const employees = res.data;
      this.setState({ employees });
    });
  }

  render() {
    return (
      <ul>
        {this.state.employees.map(employee => (
          <li key={employee.id}>
            <p>
              {employee.id} {employee.name} {employee.age}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
