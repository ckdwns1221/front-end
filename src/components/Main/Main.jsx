import React, { useEffect, useState } from 'react'
import { useQuery,useQueryClient } from 'react-query'
import axios from 'axios'
import { useRecoilValue } from 'recoil'

import MainMoreItems from './MainMoreItems'
import UserInfo from '../../store/UserInfo'
import { fetchUserInfo } from '../../api/fetchUserInfo'
import fetchRecommend from '../../api/mainpage/fetchRecommend'

import { Link, useNavigate } from 'react-router-dom'
import startHuman from '../../assets/img/start_human.png'
import rightAB from '../../assets/img/mypage_backward.png'
import Clock from '../../assets/img/mainClock.svg'
import Interest from '../../assets/img/interest.svg'
import Nav from '../Nav/Nav'
import Startpage from '../Startpage/Startpage'
import {idState} from '../Login/Login'
import fetchMore from '../../api/mainpage/fetchScrap'
import MoreItems from './More/MoreItems'
import fetchScrap from '../../api/mainpage/fetchScrap'

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
    const userId = useRecoilValue(idState)
    const {data,isLoading,error} = useQuery('userInfomation',()=> fetchUserInfo(userId))
    const [RecommendList,setRecommendList] = useState([])
    const [moreList,setMoreList] = useState([])
    const navigate = useNavigate()
    function handleTimeset() {
        navigate('/timeset')
    }
    function handleFavorite() {
        navigate('/favorite');
    }
    
    console.log(JSON.stringify(data,null,2))
    useEffect(()=>{
        const fetchRecommendData = async() =>{
            const {userId,time} = data.data
            console.log("userid:", userId)
            const timeSecond = time*60
            try{
                const response = await fetchRecommend({userId})
                console.log("response fetchRecodata: ", response.data)
                setRecommendList(response.data.videos)
                console.log("fetchRecommend: ",RecommendList)
            }
            catch(error){
                console.log(error)
            }
            
        }
        const fetchMoreData = async() =>{
          const {userId,time} = data.data
          
          try{
              const response = await fetchScrap({userId,type:'home'})
              console.log("response fetchRScrapdata: ", response.data)
              setMoreList(response.data.scraps)
              console.log("fetchRecommend: ",RecommendList)
          }
          catch(error){
              console.log(error)
          }
          
      }

        if(data){
            fetchRecommendData();
            fetchMoreData();
        }
    },[data])
    // useEffect(()=>{
    //     UserInfo()
    // },[])

    return (
      <div className='main-container'>
        <Nav/>
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
                    <div className='subBtn-box' onClick={handleTimeset}>
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
                          <img src={ Clock } alt="시계" style={{width:"32px"}}/>
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
                          <img src={ Interest } alt="관심" style={{width:"34px"}} />
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="main-line"></div>
                <div className="propose">
                    <div className='propose_header'>
                        <h2>{data?.data?.userName}님의 추천콘텐츠</h2>
                        {/* {plusIs ? <MoreRecommend /> :<Link to='/' onClick={handlePlusIs}>더보기</Link> } */}
                        <Link to={{ pathname: '/aboutRecommend', state: { RecommendList } }}>더보기</Link>
                    </div>
  
                    <MainMoreItems dummydata={RecommendList.slice(0,5)}/>
                    <div className='propose_header'>
                        <h2>스크랩한 영상</h2>
                        <Link to='/aboutScrab'>더보기</Link>
                    </div>
                    <MainMoreItems dummydata={moreList.slice(0,5)}/>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Main