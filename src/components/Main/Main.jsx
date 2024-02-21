import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import logoImage from '../../assets/img/logo.png'
import Human from '../../assets/img/main_human.svg'
import MainMoreItems from './MainMoreItems'

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
    return (
        <div className='main_wrap'>
            <div className="header">
                <img src={logoImage} alt="Logo" />
                <button>Start</button>
                <Link to='/mypage'><img src={Human} alt="human" />마이페이지</Link>
            </div>
            <div className="main">
                <div className='button'>
                    <button>시간 설정</button>
                    <button onClick={handleFavorite}>관심분야 설정</button>
                </div>
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
    )
}

export default Main