import React from 'react';
import './App.css';

const handleClick = () => {console.log('asdf')}

function App() {
  return (
    <div>
        <img onMouseOver={() => {console.log('hovered')}} src="https://www.fillmurray.com/200/100"/>
        <br />
        <br />
        <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
