import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import GoalsSection from './components/GoalsSection';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <AboutSection />
      <GoalsSection />
    </div>
  );
}

export default App;
