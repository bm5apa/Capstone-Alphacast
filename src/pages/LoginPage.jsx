import React, { useState } from 'react';
import LoginPageLeft from '../components/Login/LoginPageLeft';
import LoginPageRight from '../components/Login/LoginPageRight';
import styled from 'styled-components';

const LoginPageStyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default function LoginPage({}) {
  
  const [stepState, setStepState] = useState(0);
  
  return (
     <LoginPageStyledContainer>
      <LoginPageLeft />
      <LoginPageRight stepState={stepState} setStepState={setStepState}/>
     </LoginPageStyledContainer>
  );
}