import React, { Component } from "react";

class App extends Component {

  constructor(){
    super();
    this.state = {
      count: 0,
      color: "black",
      data: [
        { name: "Toshith", age: 20 },
        { name: "Atul", age: 21 },
        { name: "Bhanu", age: 22 }
      ]
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  changeColor = () => {
    this.setState({
      color: this.state.color === "black" ? "red" : "black"
    });
  };

  render(){
    return (
      <div style={{ textAlign: "center" }}>

        <h2 style={{ color: this.state.color }}>
          Counter: {this.state.count}
        </h2>

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.changeColor}>Change Color</button>

        <h3>Student Table</h3>

        <table border="1" align="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
