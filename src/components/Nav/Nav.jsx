import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/img/logo.png'
import 'animate.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="Nav">
      <Link to='/' className="logo">
        <img src={logoImage} alt="logo" style={{width:"35px", marginTop:"6px"}} />
        </Link>
      <div className={`hamburger-menu ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="ham-bar bar-top"></div>
        <div className="ham-bar bar-mid"></div>
        <div className="ham-bar bar-bottom"></div>
      </div>
      {isOpen && (
        <ul className='showNav'>
          <Link to='/mypage'>
            <li>마이 페이지</li>
          </Link>
          <Link to='/timeset'>
            <li>시간 설정</li>
          </Link>
          <Link to='/favorite'>
            <li>관심 분야 선택</li>
          </Link>
          <Link to='/login'>
            <li>로그인</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
