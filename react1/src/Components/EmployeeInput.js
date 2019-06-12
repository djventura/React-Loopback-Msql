import React from "react";
import axios from "axios";
import "../App.css";
export default class EmployeeInput extends React.Component {
  state = {
    id: 0,
    name: " ",
    age: 0
  };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangeAge = event => {
    this.setState({ age: parseInt(event.target.value) });
  };
  handleSubmit = event => {
    event.preventDefault();

    var employee = {
      name: this.state.name,
      age: this.state.age
    };

    console.log(employee);
    console.log(this.state.age);
    console.log(this.state.name);
    //var data = { name: this.state.name, age: this.state.age };
    //axios.post("http://localhost:3000/api/employees", data).then(res => {
    axios.post("http://localhost:3000/api/employees", employee).then(res => {
      console.log(res);
      console.log(res.data);
    });
    //window.location.reload();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            EmployeeName:
            <input type="text" name="name" onChange={this.handleChangeName} />
          </label>
          <br />
          <label>
            age:
            <input type="text" name="age" onChange={this.handleChangeAge} />
          </label>
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
