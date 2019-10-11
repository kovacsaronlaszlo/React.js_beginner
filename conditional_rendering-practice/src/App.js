import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  handleClick = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.isLoggedIn ? "Log out" : "Log in"}</button>
        {this.state.isLoggedIn ? <h1>Welcome User</h1> : <h1>Please login</h1>}
      </div>
    );
  }
}

export default App;
