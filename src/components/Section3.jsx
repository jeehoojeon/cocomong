import React from 'react';
import './Section3.css';

function Section3({ isActive }) {
  return (
    <section id="section3" className={isActive ? 'active' : ''}>
      <div className="section3_ourparks">
        <img src="/img/ourparks_1.png" alt="코코몽에코파크 용인" />
        <img src="/img/ourparks_2.png" alt="코코몽에코파크 제주" />
        <img src="/img/ourparks_3.png" alt="다이노스타 용인" />
        <img src="/img/ourparks_4.png" alt="다이노대발이파크 제주" />
      </div>
    </section>
  );
}

export default Section3; 