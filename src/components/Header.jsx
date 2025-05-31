import React, { useState } from 'react';
import { Volume2, Menu, X } from 'lucide-react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isKorean, setIsKorean] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setIsKorean(!isKorean);
  };

  return (
    <header>
      <div className="wrap_inner">
        <div className="h_logo">
          <h1><img src="/img/logo.png" alt="코코몽 에코파크" /></h1>
        </div>
        <div className="h_menu">
          <Volume2 className="volume" />
          <div className="toggle_wrap">
            <div className={`toggle_slider ${!isKorean ? 'eng' : ''}`}></div>
            <div className={`lang option_kr ${isKorean ? 'active' : ''}`} onClick={toggleLanguage}>KR</div>
            <div className={`lang option_eng ${!isKorean ? 'active' : ''}`} onClick={toggleLanguage}>EN</div>
          </div>
          {!isMenuOpen ? (
            <Menu className="menu on" onClick={toggleMenu} />
          ) : (
            <X className="x_icon on" onClick={toggleMenu} />
          )}
          <div>
            <ul className={`submenu ${isMenuOpen ? 'on' : ''}`}>
              <li><a href="#">시설소개</a></li>
              <li><a href="#">티켓요금</a></li>
              <li><a href="#">운영시간</a></li>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">이벤트</a></li>
              <li><a href="#">오시는 길</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 