import React from 'react';
import './Section5.css';

function Section5({ isActive }) {
  return (
    <section id="section5" className={isActive ? 'active' : ''}>
      <div className="section5_festival">
        <div className="section5_esset">
          <img src="/img/festival_esset1.png" alt="냉장고" />
          <img src="/img/festival_esset2.png" alt="냉장고" />
        </div>

        <div className="section5_txt">
          <h2>FESTIVAL</h2>
          <p>코코몽 친구들과 즐기는 가을 국화꽃 축제로 초대해요!</p>
        </div>

        <div className="section5_character">
          <img src="/img/festival_c1.png" alt="두콩" />
          <img src="/img/festival_c2.png" alt="세콩" />
          <img src="/img/festival_c3.png" alt="네콩" />
        </div>
      </div>
    </section>
  );
}

export default Section5; 