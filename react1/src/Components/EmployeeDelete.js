import React from "react";
import axios from "axios";

export default class EmployeeList extends React.Component {
  state = {
    id: 0
  };

  handleChange = event => {
    this.setState({ id: event.target.value });
  };

  //   handleChangeName = event => {
  //     this.setState({ id: event.target.value });
  //   };
  //   handleChangeAge = event => {
  //     this.setState({ age: parseInt(event.target.value) });
  //   };
  handleSubmit = event => {
    event.preventDefault();

    // var employee = {
    //   name: this.state.name,
    //   age: this.state.age
    // };

    axios
      .delete(`http://localhost:3000/api/employees/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };
  // console.log(employee);
  // console.log(this.state.age);
  // console.log(this.state.name);
  //var data = { name: this.state.name, age: this.state.age };
  //axios.post("http://localhost:3000/api/employees", data).then(res => {
  // axios.post("http://localhost:3000/api/employees", employee).then(res => {
  //   console.log(res);
  //   console.log(res.data);
  // });
  //   };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Employee ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
          <br />
          {/* <label>
            age:
            <input type="text" name="age" onChange={this.handleChangeAge} />
          </label> */}
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
