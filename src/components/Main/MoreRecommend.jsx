import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import goback from '../../assets/img/goBack.png';
import bookmark_activity from '../../assets/img/bookmark_activity.png';
import bookmark_notactivity from '../../assets/img/bookmark_notactivity.png'


function MoreRecommend() {
    const [bookMarkIs, setBookMarkIs] = useState(false);
    const [bookScrabIs, setBookScrabIs] = useState(false);
    function handleBookmark() {
        setBookMarkIs(!bookMarkIs);
    }
    return (
        <div className='main_wrap'>
            <div style={{marginBottom:30}}>
                <div className='more_header'>
                    <Link to='/'><img src={goback} className='goBack_img' /></Link>
                    <h2 style={{fontWeight: 900}}>이승민님의 추천콘텐츠</h2>
                </div>

            </div>
            <div className="main">
                <p style={{fontSize:20}}>경제/금융</p>
                <div style={{marginLeft:10}}>

                </div>
                <ul className="propose">
                    <li className="video">
                        <div className="imgbox">
                            {!bookMarkIs ?
                                <img src={bookmark_notactivity} style={{ width: 19, height: 19 }} onClick={handleBookmark} /> :
                                <img src={bookmark_activity} style={{ width: 19, height: 19 }} onClick={handleBookmark} />
                            }
                        </div>
                        <div>
                            <p className="cate">경제/금융</p>
                            <div className="title">주식으로 돈버는 법</div>
                        </div>
                    </li>

                    <li className="video">
                        <div className="imgbox">
                            {!bookMarkIs ?
                                <img src={bookmark_notactivity} style={{ width: 19, height: 19 }} onClick={handleBookmark} /> :
                                <img src={bookmark_activity} style={{ width: 19, height: 19 }} onClick={handleBookmark} />
                            }
                        </div>
                        <div>
                            <p className="cate">경제/금융</p>
                            <div className="title">주식으로 돈버는 법</div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default MoreRecommend