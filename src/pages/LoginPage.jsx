import LoginPageLeft from '../components/Login/LoginPageLeft';
import LoginPageRight from '../components/Login/LoginPageRight';
import styled from 'styled-components';

const LoginPageStyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

function LoginPage({}) {
  return (
     <LoginPageStyledContainer>
      <LoginPageLeft />
      <LoginPageRight />
     </LoginPageStyledContainer>
  );
}

export default LoginPage;