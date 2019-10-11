import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      textarea: "default text",
      isFriendly: true,
      gender: "",
      favColor: ""
    }
  }

  handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First name"
          onChange={this.handleChange} />
        <br />
        <input 
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last name"
          onChange={this.handleChange} />

        <br />

        <textarea value={this.state.textarea} name="textarea" onChange={this.handleChange} />

        <br/>

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange} /> is friendly?
        </label>

        <br/>

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === 'male'}
            onChange={this.handleChange} /> male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === 'female'}
            onChange={this.handleChange} /> female
        </label>

        <br/>

        <select 
          value={this.state.favColor} 
          onChange={this.handleChange} 
          name="favColor">
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </select>
        

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <p>{this.state.textarea}</p>
        <p>gender: {this.state.gender}</p>
        <p>favorite color is: {this.state.favColor}</p>
        <button>Submit</button>
      </form>
    )
  }
}

export default App;
