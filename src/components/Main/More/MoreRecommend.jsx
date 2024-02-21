import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';


import goback from '../../../assets/img/goBack.png';
import bookmark_activity from '../../../assets/img/bookmark_activity.png';
import bookmark_notactivity from '../../../assets/img/bookmark_notactivity.png'

const dummydata = [{
    id: 1,
    category: '주식/경제',
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

function MoreRecommend() {
    const [bookMarkStates, setBookMarkStates] = useState(dummydata.map(()=>false));
    const [bookScrabIs, setBookScrabIs] = useState(false);
    
    function handleBookmark(index) {
        setBookMarkStates((prevStates)=> {
            const newStates = [...prevStates]
            newStates[index] = !newStates[index]
            return newStates
        });
    }
    return (
        <div className='more_wrap'>
            <div style={{ marginBottom: 30 }}>
                <div className='more_header'>
                    <Link to='/'><img src={goback} className='goBack_img' /></Link>
                    <h2 style={{ fontWeight: 900 }}>이승민님의 추천콘텐츠</h2>
                </div>

            </div>
            <div className="more">
                <ul className='more-content-wrap'>
                    {dummydata.map((dummy,index) => (
                        <>
                            <li key={dummy.id} className='more-content-video'>
                            
                                <div className='video-container'>
                                    <ReactPlayer
                                        url={dummy.videoUrl}
                                        className='react-player'
                                        width='100%'
                                        height='100%'
                                        controls={true}
                                    />
                                </div>
                                <div className='more-content-footer'>
                                    <div className='more-letter-wrap'>
                                        <p className='more-footer-category'>{dummy.category}</p>
                                        <p className='more-footer-title'>{dummy.title}</p>
                                    </div>
                                    {bookMarkStates[index]? <img src={bookmark_activity} className='more-bookmark' onClick={() =>handleBookmark(index)} alt='bookmark_activity' /> : <img className='more-bookmark' src={bookmark_notactivity} onClick={() =>handleBookmark(index)} alt='bookmark_notactivity' />}
                                </div>
                                
                            </li >
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MoreRecommend