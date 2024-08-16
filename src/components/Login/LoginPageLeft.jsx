import React from 'react';
import styled from 'styled-components';

const LoginPageLeftStyledContainer = styled.div`
  border: 2px solid blue;
  width: 100%;
`;

function LoginPageLeft({}) {
  return (
  <LoginPageLeftStyledContainer>
  <h1>LoginPageLeft</h1>
  </LoginPageLeftStyledContainer>
  );
}

export default LoginPageLeft;