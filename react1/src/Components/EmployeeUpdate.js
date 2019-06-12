import React from "react";
import axios from "axios";

export default class EmployeeList extends React.Component {
  state = {
    id: 0,
    name: " ",
    age: 0
  };

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  };
  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangeAge = event => {
    this.setState({ age: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    var employee = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age
    };

    axios.put("http://localhost:3000/api/employees", employee).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Employee ID:
            <input type="number" name="id" onChange={this.handleChangeId} />
          </label>
          <br />
          <label>
            EmployeeName:
            <input type="text" name="name" onChange={this.handleChangeName} />
          </label>
          <br />
          <label>
            age:
            <input type="number" name="age" onChange={this.handleChangeAge} />
          </label>
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}
