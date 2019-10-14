import React, { useState,useEffect } from 'react';
import randomcolor from "randomcolor";
import './App.css';

/*
useEffect => componentDidMount, componentDidUpdate, componentWillMount
Side effects?
network request, manual DOM manipulation, event listener or timeouts and intervals
*/

const App = () => {

  /* useState beginner */
  /* const value = useState("Yes");
  console.log(value) */

  /* const [ answer, ??? ] = useState("Yes");
  console.log(answer) */

  /* const person = {
    name: 'joe',
    age: 42
  }

  const { name, age } = person;
  console.log(name);
  console.log(age); */

  /* return (
    <div>
        <h1>Is state important to know? {answer}</h1>
    </div>
  ) */

  const [count, setCount] = useState(0);
  // const [answer, setAnswer] = useState("Yes");
  const [color, setColor] = useState("");

  /* const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  } */

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000);
    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    setColor(randomcolor());

    /* setInterval(() => {
      console.log("interval")
    }, 1000) */
  }, [count])
  /* [count] => in this array I can specify what variable I wanna to watch to change is in, it that variable change we run the useEffect again */
  /* now the change run when the component render */
  /* if we not give any value - [] - to the array the useEffect not run ever again */

  /* return (
      <div>
          <h1 style={{color: color}}>{count}</h1>
          <button onClick={increment}>Increment!</button>
          <button onClick={decrement}>Decrement!</button>
      </div>
  ) */

  return (
    <div>
        <h1 style={{color: color}}>{count}</h1>
    </div>
)
}

export default App;
