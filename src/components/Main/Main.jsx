import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import startHuman from '../../assets/img/start_human.png'
import rightAB from '../../assets/img/mypage_backward.png'
import Clock from '../../assets/img/mainClock.svg'
import Interest from '../../assets/img/interest.svg'
import MainMoreItems from './MainMoreItems'
import Nav from '../Nav/Nav'
import Startpage from '../Startpage/Startpage'

const dummydata = [{
    id: 1,
    category: '경제/금융',
    title: '주식으로 돈 버는법',
    videoUrl: 'https://youtu.be/CTpbD4Y0IFU?si=ja7sjUW1vzZ7fEaq',
    time: '13',
}, {
    id: 2,
    category: '마케팅',
    title: '소비자의 마음을 사로잡는 커피',
    videoUrl: 'https://youtu.be/kHp6qLsyu-U?si=_MM6lyoDBycnLiZH',
    time: '18',
},
{
    id: 3,
    category: '마케팅',
    title: '4P, 3C? 시장분석 용어정리',
    videoUrl: 'https://youtu.be/kHp6qLsyu-U?si=_MM6lyoDBycnLiZH',
    time: '18',
},

]

const Main = () => {
    const [plusIs, setPlusIs] = useState(false);
    const navigate = useNavigate()
    function handlePlusIs() {
        setPlusIs(!plusIs)
    }
    function handleFavorite() {
        navigate('/favorite');
    }

    const [firstVisit, setFirstVisit] = useState(false);

    useEffect(() => {
      if (!localStorage.getItem('visited')) {
          setFirstVisit(true);
          localStorage.setItem('visited', 'true');

          const timer = setTimeout(() => {
              navigate('/');  // 2초 후에 메인 페이지로 이동
          }, 4000);

          return () => clearTimeout(timer);  // 컴포넌트가 언마운트되면 타이머를 제거합니다.
      }
  }, [navigate]);

    return (
      <div className='main-container'>
        {firstVisit && <Startpage/>}
        {!firstVisit && <Nav/>}
        <div className='main_wrap'>
            <div className="header">
                <div className='header-start'>
                  <div>
                    <div className='header-subtext'>
                      출/퇴근 및 통학<br/> 시간 설정하고
                    </div>
                    <div className='header-title'>
                      내가 관심있는<br/>영상보기
                    </div>
                    <Link to='/timeset'>
                      <button className='header-btn'>시작하기</button>
                    </Link>
                  </div>
                  <div>
                    <img src={startHuman} alt="시작 사진" style={{width:"130px"}} />
                  </div>
                </div>
                <div className='subBtn-boxWrap'>
                    <div className='subBtn-box'>
                      <div className="box-header">
                        <div className="box-title">
                          시간 설정
                        </div>
                        <img src={rightAB} alt="꺽쇠" className='rightAB'  />
                      </div>
                      <div className="box-content">
                        <div className="box-subtitle">
                          출/퇴근 시간<br/>설정하기
                        </div>
                        <div className="box-icon">
                          <img src={ Clock } alt="시계" />
                        </div>
                      </div>
                    </div>
                    <div className='subBtn-box' onClick={handleFavorite}>
                      <div className="box-header">
                        <div className="box-title">
                          관심분야 설정
                        </div>
                        <img src={rightAB} alt="꺽쇠" className='rightAB' />
                      </div>
                      <div className="box-content">
                        <div className="box-subtitle">
                          나의 관심분야<br/>
                          설정하기
                        </div>
                        <div className="box-icon">
                          <img src={ Interest } alt="관심" />
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="main-line"></div>
                <div className="propose">
                    <div className='propose_header'>
                        <h2>이승민님의 추천콘텐츠</h2>
                        {/* {plusIs ? <MoreRecommend /> :<Link to='/' onClick={handlePlusIs}>더보기</Link> } */}
                        <Link to='/aboutRecommend'>더보기</Link>
                    </div>
                    {/* 수정시작 */}
                    <MainMoreItems dummydata={dummydata}/>

                    <div className='propose_header'>
                        <h2>스크랩한 영상</h2>
                        <Link to='/aboutScrab'>더보기</Link>
                    </div>
                    <MainMoreItems dummydata={dummydata}/>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Main