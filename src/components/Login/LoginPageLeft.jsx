import React from 'react';
import styled from 'styled-components';
import alphacast_logo from '../../styles/svg/alphacast_logo.png';
import alphacast_logo_connecting from '../../styles/svg/alphacast_logo_connecting.svg';
import '../../styles/LoginPageLeft.css';

const LoginPageLeftStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function LoginPageLeft({}) {
  return (
  <LoginPageLeftStyledContainer>
  <img className="alphacast-logo" src={alphacast_logo} />
  <img className="alphacast-logo_connecting" src={alphacast_logo_connecting} />
  <a className='login-button' href="https://example.com">使用SPOTIFY帳號登入</a>
  <div>
    <span className='login-question'>沒有帳號嗎？</span>
    <a className='login-signup' href="https://example.com"><span>註冊帳號</span></a>
  </div>
  </LoginPageLeftStyledContainer>
  );
}

export default LoginPageLeft;