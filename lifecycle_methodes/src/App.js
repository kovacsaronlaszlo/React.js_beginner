import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    // return the new, updated state based upon the props
  }

  getSnapshotBeforeUpdate() {
    // creat backup of the current way thing are
  }

  // componentWillMount() {}

  // only run once, when the component showing on the screen
  componentDidMount() {
    // GET the data I need to correctly display
  }

  // receiving props, from the parent component
  // checking the receiving props is change or not, if it change it changes it
  /* componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do something here
    }
  } */

  // give us to optimize our app
  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  // componentWillUpdate() {}

  // before you close the component
  componentWillUnmount() {
    // teardown or cleanup your code before component disappear
    // remove event listener
  }

  render() {
    return(
      <div>
        Code goes here
      </div>
    )
  };
}

export default App;
