import React from 'react';
import './App.css';
import Conditional from './components/Conditional';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // isLoading: true
      unreadMessages: [
        'asdf',
        'jklé'
      ]
    }
  }

  /* componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  } */

  // &&
  // false && false

  render() {
    return(
      <div>
        {/* this.state.isLoading ? <h1>Loading...</h1> : <Conditional /> */}
        {
          this.state.unreadMessages.length > 0 && 
            <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        }
      </div>
    )
  }
}

export default App;
