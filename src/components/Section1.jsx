import React from 'react';
import './Section1.css';

function Section1({ isActive }) {
  return (
    <section id="section1" className={isActive ? 'active' : ''}>
      <div className="section1_main">
        <div className="character">
          <div className="aromi">
            <img src="/img/main_aromi.png" alt="아로미" />
          </div>
          <div className="agul">
            <img src="/img/main_arul.png" alt="아글" />
          </div>
          <div className="cocomong">
            <img src="/img/main_cocomong.png" alt="코코몽" />
          </div>
          <div className="duri">
            <img src="/img/main_duri.png" alt="두리" />
          </div>
          <div className="kero">
            <img src="/img/main_kero.png" alt="케로" />
          </div>
        </div>

        <div className="video_container">
          <video autoPlay muted loop>
            <source src="/mp4/video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="asset">
          <img src="/img/asset_cloud1.png" alt="구름" />
          <img src="/img/asset_cloud2.png" alt="구름" />
        </div>
      </div>
    </section>
  );
}

export default Section1; 