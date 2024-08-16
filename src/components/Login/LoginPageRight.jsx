import React from 'react';
import styled from 'styled-components';

const LoginPageRightStyledContainer = styled.div`
  border: 2px solid green;
  width: 100%;
`;

function LoginPageRight({}) {
  return (
  <LoginPageRightStyledContainer>
  <h1>LoginPageRight</h1>
  </LoginPageRightStyledContainer>
  );
}

export default LoginPageRight;