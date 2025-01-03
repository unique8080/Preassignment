import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from './components/Features';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Features />
      <Team/>
    </div>
  );
}

export default App;