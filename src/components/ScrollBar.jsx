import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ScrollBar.css';

function ScrollBar({ currentSection, setCurrentSection }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;
      
      // 현재 보이는 섹션 찾기
      let currentSectionIndex = 0;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop - sectionHeight / 2) {
          currentSectionIndex = index;
        }
      });

      // 스크롤 진행률 계산
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (scrollPosition / totalHeight) * 100;
      
      setScrollProgress(currentProgress);
      setCurrentSection(currentSectionIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setCurrentSection]);

  const handleDotClick = (index) => {
    setCurrentSection(index);
    const sections = document.querySelectorAll('section');
    sections[index].scrollIntoView({ behavior: 'smooth' });
  };

  // 인디케이터 위치 계산
  const getIndicatorPosition = () => {
    const positions = [0, 25, 50, 75, 100]; // 각 점의 위치 (퍼센트)
    return positions[currentSection];
  };

  return (
    <div className="scrollbar_container">
      <div className="scrollbar_track">
        <div 
          className="scrollbar_indicator" 
          style={{ left: `${getIndicatorPosition()}%` }}
        >
          <div className="left">
            <ChevronLeft />
          </div>
          <div className="right">
            <ChevronRight />
          </div>
        </div>
        <div className="dot_indicators">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`dot ${currentSection === index ? 'active' : ''}`}
              data-index={index}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollBar; 