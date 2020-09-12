import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Destination from './components/Destination/Destination';
import Team from './components/Team/Team';
import Activity from './components/Activities/Activity';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Destination />
      <Team />
      <Activity />
      <Testimonial/>
    </div>
  );
}

export default App;