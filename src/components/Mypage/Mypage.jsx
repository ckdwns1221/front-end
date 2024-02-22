import React, { useState,useEffect } from 'react'
import Calendar from 'react-calendar'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import MypageHeader from './MypageHeader'
import mypage_option from '../../assets/img/mypage_option.png'
import goback from '../../assets/img/mypage_backward.png'
import MypageButton from './MypageButton'
import fetchCalendar from '../../api/mypage/fetchCalendar'
import {idState,nameState} from '../Login/Login'

const Mypage = () => {
  const initialDate = new Date()
  const userId = useRecoilValue(idState)
  const userName = useRecoilValue(nameState)
  const [selectedDate, setSelectedDate] = useState(initialDate)
  const [myData, setMyData] = useState([])
  const navigate = useNavigate()

  function handleDateChange(date) {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    setSelectedDate(utcDate)
    console.log(selectedDate)
  }
  const formatTime = (time) => {
    if (time){
      const [hours, minutes, seconds] = time.split(':');
      return `${parseInt(hours, 10)}시간${parseInt(minutes, 10)}분`
    }
    
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCalendar(userId);
        setMyData(response.data)
        console.log('Fetched data:', response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);
  console.log('mydata: ',myData)
 
  useEffect(() => {
    if (initialDate !== selectedDate) {
      const formattedDate = selectedDate.getUTCFullYear() + '-' + ('0' + (selectedDate.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + selectedDate.getUTCDate()).slice(-2);
      navigate(`/mypage/${userId}/${formattedDate}`)
    }
  }, [selectedDate]);

  return (
    <div className='mypage-wrap'>
      <div className='mypage-image'>
        <Link to={'/'}><img src={goback} alt='gobackimage' style={{ width: 11 }} /></Link>
        <img src={mypage_option} alt='mypage_option' style={{ width: 20 }} />
      </div>
      <div className='mypage-header-wrap'>
        <MypageHeader name={userName} time={formatTime(myData.totalTime)} />
      </div>
      <div className='mypage-content-wrap'>
        <Calendar onChange={handleDateChange} value={selectedDate} locale='en-US' />
      </div>
      <div className='mypage-button-wrap'>
        <MypageButton title={`출퇴근 · 등하교 위치설정`} />
        <MypageButton title={'관심분야 설정'} />
      </div>

    </div>
  )
}

export default Mypage