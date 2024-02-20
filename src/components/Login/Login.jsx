import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/img/logo.png'
import eyeOpenImage from '../../assets/img/login_eye_open.svg'
import eyeClosedImage from '../../assets/img/login_eye_closed.svg'
import ScrollTop from '../../utils/ScrollTop';
import Nav from '../Nav/Nav'

const User = {
  id: 'test1234',
  pw: 'test1234@@'
}

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if(idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const onClickConfirmButton = () => {
    if(id === User.id && pw === User.pw) {
      alert('로그인에 성공했습니다.')
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  }

  return (
    <>
      <Nav />
      <div className="login-container">
        <div className="login-header">
          <img src={logoImage} alt="logo" />
          <div className="login-text">
            틈새시간, 손틈새로<br />
            아낄준비 되셨나요?
          </div>
        </div>
        <div className="login-input">
          <div className="input-header">
            로그인
          </div>
          <div className="input-title">
            아이디
          </div>
          <div className="input-wrap">
            <input
              className="input"
              type="text"
              placeholder="ID"
              value={id}
              onChange={handleId}/>
          </div>
          <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
              <div>올바른 아이디를 입력해주세요.</div>
            )}
          </div>
          <div className="input-title">
            비밀번호
          </div>
          <div className="input-wrap pweyes">
            <input
              className="input"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={pw}
              onChange={handlePw} />
            <button 
              style={{ backgroundImage: `url(${passwordVisible ? eyeOpenImage : eyeClosedImage})` }} 
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>
        <Link to='/logincollect'>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            확인
          </button>
        </Link>
        <div className="goJoinWrap">
          회원이 아니신가요? 
          <Link to='/join'>
            <div className="goToJoin">
              회원가입 하러가기
            </div>
          </Link>
        </div>
      </div>
      <ScrollTop />
    </>
  );
}