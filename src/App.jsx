import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScrollBar from './components/ScrollBar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (event) => {
      if (isScrolling) return;

      setIsScrolling(true);

      if (event.deltaY > 0) {
        if (currentSection < 4) {
          setCurrentSection(prev => prev + 1);
        }
      } else {
        if (currentSection > 0) {
          setCurrentSection(prev => prev - 1);
        }
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, isScrolling]);

  return (
    <div className="wrap">
      <Header />
      <ScrollBar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <Section1 isActive={currentSection === 0} />
      <Section2 isActive={currentSection === 1} />
      <Section3 isActive={currentSection === 2} />
      <Section4 isActive={currentSection === 3} />
      <Section5 isActive={currentSection === 4} />
    </div>
  );
}

export default App; 