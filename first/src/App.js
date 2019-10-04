import React from 'react';
import './App.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

const App = () => {
  const firstName = "Aron";
  const lastName = "Kovacs";
  return (
    <div>
      <h1>Hello { `${firstName} ${lastName}` }</h1>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
