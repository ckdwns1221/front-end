import React, { useState } from 'react'
import logoImage from '../../assets/img/logo.png'
import Human from '../../assets/img/main_human.svg'
import { Link, useNavigate, useNavigation } from 'react-router-dom'


const Main = () => {
    const [plusIs,setPlusIs] = useState(false);
    const navigate=useNavigate()
    function handlePlusIs(){
        setPlusIs(!plusIs)
    }
    function handleFavorite(){
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
                    <div className="video">
                        <div className="imgbox"></div>
                        <div>
                            <div className="cate">경제/금융</div>
                            <div className="title">주식으로 돈버는 법</div>
                        </div>
                    </div>
                   
                    <div className='propose_header'>
                        <h2>스크랩한 영상</h2>
                        <Link to='/aboutScrab'>더보기</Link>
                    </div>
                    <div className="video">
                        <div className="imgbox"></div>
                        <div>
                            <div className="cate">경제/금융</div>
                            <div className="title">주식으로 돈버는 법</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main