import React from 'react';
import './App.css';
import Joke from './Joke';
import jokesData from "./jokesData";

const App = () => {
  const jokeComponent = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
  return (
    <div>
      {jokeComponent}
    </div>
  );
}

export default App;
