import React from 'react';
import styled from 'styled-components';
import loginphoto1 from '../../styles/svg/loginphoto1.svg';
import loginphoto2 from '../../styles/svg/loginphoto2.svg';
import loginphoto3 from '../../styles/svg/loginphoto3.svg';
import keyboard_arrow_left from '../../styles/svg/keyboard_arrow_left.png';
import keyboard_arrow_right from '../../styles/svg/keyboard_arrow_right.png';
import '../../styles/LoginPageRight.css';

const LoginPageRightStyledContainer = styled.div`
  background-color: rgba(35, 38, 47, 1);
  width: 100%;
`;

function LoginPageRight({}) {
  return (
  <LoginPageRightStyledContainer>
    <div className='loginpage-photo-section'>
      <img className='loginpage-photo' src={loginphoto1} alt="" />
    </div>
    <div className="loginpage-arrow-section">
      <img className='loginpage-arrow-left arrow' src={keyboard_arrow_left} alt="" />
      <img className='loginpage-arrow-right arrow' src={keyboard_arrow_right} alt="" />
      </div>
    <div className='loginpage-description'>
      <div className="loginpage-title">鼓舞人心的故事</div>
      <div className="loginpage-subtitle">從非凡的人生故事和成功經歷中獲得靈感</div>
    </div>
    <div className='loginpage-pageline-section'>
      <div className="pageline pageline-1 pageline-white"></div>
      <div className="pageline pageline-2"></div>
      <div className="pageline pageline-3"></div>
    </div>
  </LoginPageRightStyledContainer>
  );
}

export default LoginPageRight;