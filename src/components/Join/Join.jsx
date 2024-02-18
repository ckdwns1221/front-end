import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/img/logo.png'
import eyeOpenImage from '../../assets/img/login_eye_open.svg'
import eyeClosedImage from '../../assets/img/login_eye_closed.svg'

const User = {
  nickname: 'nickname',
  id: 'test1234',
  pw: 'test1234@@',
  pwCheck: 'test1234@@'
}


export default function Join() {
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const [nicknameValid, setNicknameValid] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pwCheckValid, setPwCheckValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const [pwVisible, setPwVisible] = useState(false);
  const [pwCheckVisible, setPwCheckVisible] = useState(false);

  useEffect(() => {
    if(nicknameValid && idValid && pwValid && pwCheckValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [nicknameValid, idValid, pwValid, pwCheckValid]);

  const handleNickname = (e) => {
    setNickname(e.target.value);
    const regex =
    /(?=.*[a-zA-Z가-힣])[a-zA-Z가-힣0-9]+$/;
    if (regex.test(e.target.value)) {
      setNicknameValid(true);
    } else {
      setNicknameValid(false);
    }
  };
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
  const handlePwCheck = (e) => {
    setPwCheck(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (regex.test(e.target.value)) {
      setPwCheckValid(true);
    } else {
      setPwCheckValid(false);
    }
  };
  const onClickConfirmButton = () => {
    if(id === User.id && pw === User.pw) {
      alert('회원가입에 성공했습니다.')
    } else {
      alert("기입하신 정보를 다시 확인해주세요.");
    }
  }

  return (
    <div className="join-container">
      <div className="join-header">
        <img src={logoImage} alt="logo" />
        <div className="join-text">
          틈새시간, 손틈새로
        </div>
      </div>
      <div className="join-input">
        <div className="input-header">
          회원가입
        </div>
        <div className="input-title">별명</div>
        <div className="input-wrap">
          <input
            className="input"
            type="text"
            placeholder="nickname"
            value={nickname}
            onChange={handleNickname}
          />
        </div>
        <div className="input-title">아이디</div>
        <div className="input-wrap">
          <input
            className="input"
            type="text"
            placeholder="ID"
            value={id}
            onChange={handleId}/>
        </div>
        <div className="input-title">
          비밀번호
        </div>
        <div className="input-wrap pweyes">
          <input
            className="input"
            type={pwVisible ? "text" : "password"}
            placeholder="Password"
            value={pw}
            onChange={handlePw} />
           <button 
            style={{ backgroundImage: `url(${pwVisible ? eyeOpenImage : eyeClosedImage})` }} 
            onClick={() => setPwVisible(!pwVisible)}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
        <div className="input-title">
          비밀번호 확인
        </div>
        <div className="input-wrap pweyes" >
          <input
            className="input"
            type={pwCheckVisible ? "text" : "password"}
            placeholder="Password Confirm"
            value={pwCheck}
            onChange={handlePwCheck} />
           <button 
            style={{ backgroundImage: `url(${pwCheckVisible ? eyeOpenImage : eyeClosedImage})` }} 
            onClick={() => setPwCheckVisible(!pwCheckVisible)}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwCheckValid && pwCheck.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
      </div>
      <div>
        <Link to='/login'>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            확인
          </button>
        </Link>
      </div>
      <div className="goLoginWrap">
        이미 가입하셨나요? 
        <Link to='/join'>
          <div className="goToLogin">
            로그인 하러가기
          </div>
        </Link>
      </div>
    </div>
  );
}