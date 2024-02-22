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
  const userid = 'k' // 추후 리덕스로 불러올 예정
  const userId = useRecoilValue(idState)
  const userName = useRecoilValue(nameState)
  const [selectedDate, setSelectedDate] = useState(initialDate)
  const navigate = useNavigate()

  function handleDateChange(date) {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    setSelectedDate(utcDate)
    console.log(selectedDate)
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCalendar(userId);
        console.log('Fetched data:', data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 
  useEffect(() => {
    if (initialDate !== selectedDate) {
      const formattedDate = selectedDate.getUTCFullYear() + '-' + ('0' + (selectedDate.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + selectedDate.getUTCDate()).slice(-2);
      navigate(`/mypage/${userid}/${formattedDate}`)
    }
  }, [selectedDate]);

  return (
    <div className='mypage-wrap'>
      <div className='mypage-image'>
        <Link to={'/'}><img src={goback} alt='gobackimage' style={{ width: 11 }} /></Link>
        <img src={mypage_option} alt='mypage_option' style={{ width: 20 }} />
      </div>
      <div className='mypage-header-wrap'>
        <MypageHeader name={userName} time={'9시간 40분'} />
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