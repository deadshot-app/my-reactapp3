import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }
  handleEmailchange = (e) => {
    this.setState = {
      email: e.target.value,
    };
  };
  handleEmailchange = (e) => {
    this.setState = {
      password: e.target.value,
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form>
        <input
          name="email"
          type="email"
          // onChange={(e) => this.handleEmailchange(e)}
          // value={this.state.email}
        />
        <input
          name="password"
          type="password"
          // onChange={(e) => this.handleEmailchange(e)}
          // value={this.state.password}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default App;
