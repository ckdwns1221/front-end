import React, { useState,useEffect } from 'react'
import Calendar from 'react-calendar'

import MypageHeader from './MypageHeader'
import MypageButton from './MypageButton'
import Nav from '../Nav/Nav'
import { Link, useNavigate } from 'react-router-dom'

const Mypage = () => {
  const initialDate = new Date()
  const userid = 'k' // 추후 리덕스로 불러올 예정

  const [selectedDate, setSelectedDate] = useState(initialDate)
  const navigate = useNavigate()

  function handleDateChange(date) {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    setSelectedDate(utcDate)
    console.log(selectedDate)
  }
 
  useEffect(() => {
    if (initialDate !== selectedDate) {
      const formattedDate = selectedDate.getUTCFullYear() + '-' + ('0' + (selectedDate.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + selectedDate.getUTCDate()).slice(-2);
      navigate(`/mypage/${userid}/${formattedDate}`)
    }
  }, [selectedDate]);

  return (
    <>
      <Nav/>
      <div className='mypage-wrap'>
        <div className='mypage-header-wrap'>
          <MypageHeader name={'이승민'} time={'9시간 40분'} />
        </div>
        <div className='mypage-content-wrap'>
          <Calendar onChange={handleDateChange} value={selectedDate} locale='en-US' />
        </div>
        <div className='mypage-button-wrap'>
          <MypageButton title={`위치 설정`} />
          <MypageButton title={'관심분야 설정'} className='interest' />
        </div> 
      </div>
    </>
  )
}

export default Mypage