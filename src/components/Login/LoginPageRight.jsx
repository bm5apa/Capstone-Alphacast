import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import loginphoto1 from '../../styles/svg/loginphoto1.svg';
import loginphoto2 from '../../styles/svg/loginphoto2.svg';
import loginphoto3 from '../../styles/svg/loginphoto3.svg';
import keyboard_arrow_left from '../../styles/svg/keyboard_arrow_left.png';
import keyboard_arrow_right from '../../styles/svg/keyboard_arrow_right.png';
import '../../styles/LoginPageRight.css';

const LoginPageRightStyledContainer = styled.div`
  width: 100%;
  transition: 0.6s;
`;

export default function LoginPageRight({stepState, setStepState}) {

  const [backgroundChange, setBackgroundChange] = useState({ backgroundColor: '' });
  const [photoChange, setPhotoChange] = useState({ src: '' });
  const [titleChange, setTitleChange] = useState(''); 
  const [subtitleChange, setSubtitleChange] = useState(''); 
  const [pageline1Change, setPageline1Change] = useState({ backgroundColor: '' }); 
  const [pageline2Change, setPageline2Change] = useState({ backgroundColor: '' }); 
  const [pageline3Change, setPageline3Change] = useState({ backgroundColor: '' }); 

  useEffect(() => {
    if (stepState === 1 ) {
      setBackgroundChange({ backgroundColor: 'rgba(45, 56, 49, 1)'})
      setPhotoChange(loginphoto2)
      setTitleChange('輕鬆分類與管理')
      setSubtitleChange('一目了然的分類，讓收藏的Podcast保持整潔')
      setPageline1Change({ backgroundColor: ''})
      setPageline2Change({ backgroundColor: 'rgba(255, 255, 255, 1)'})
      setPageline3Change({ backgroundColor: ''})
    } else if (stepState === 2 ) {
      setBackgroundChange({ backgroundColor: 'rgba(6, 53, 64, 1)'})
      setPhotoChange(loginphoto3)
      setTitleChange('Spotify快速同步')
      setSubtitleChange('透過Spotify登入，即刻同步您的收藏，隨時隨地收聽')
      setPageline1Change({ backgroundColor: ''})
      setPageline2Change({ backgroundColor: ''})
      setPageline3Change({ backgroundColor: 'rgba(255, 255, 255, 1)'})
    } else if (stepState === 0) {
      setBackgroundChange({ backgroundColor: 'rgba(35, 38, 47, 1)'})
      setPhotoChange(loginphoto1)
      setTitleChange('鼓舞人心的故事')
      setSubtitleChange('從非凡的人生故事和成功經歷中獲得靈感')
      setPageline1Change({ backgroundColor: 'rgba(255, 255, 255, 1)'})
      setPageline2Change({ backgroundColor: ''})
      setPageline3Change({ backgroundColor: ''})
      setStepState(0)
    }else{
      return 
    }
  }, [stepState]);

  function handleClickNext() {
    if(stepState === 0 || stepState === 1 ){
    setStepState(stepState + 1);
    }else{
      return
    }
  }

  function handleClickPre() {
    if(stepState === 2 || stepState === 1 ){
    setStepState(stepState - 1);
    }else{
      return
    }
  }

  return (
  <LoginPageRightStyledContainer style={backgroundChange}>
    <div className='loginpage-photo-section'>
      <img className='loginpage-photo' src={photoChange} alt="" /> 
    </div>
    <div className="loginpage-arrow-section">
      <img className='loginpage-arrow-left arrow' src={keyboard_arrow_left} alt="" onClick={handleClickPre}/>
      <img className='loginpage-arrow-right arrow' src={keyboard_arrow_right} alt="" onClick={handleClickNext}/>
      </div>
    <div className='loginpage-description'>
      <div className="loginpage-title">{titleChange}</div>
      <div className="loginpage-subtitle">{subtitleChange}</div>
    </div>
    <div className='loginpage-pageline-section'>
      <div className="pageline pageline-1" style={pageline1Change}></div>
      <div className="pageline pageline-2" style={pageline2Change}></div>
      <div className="pageline pageline-3" style={pageline3Change}></div>
    </div>
  </LoginPageRightStyledContainer>
  );
}