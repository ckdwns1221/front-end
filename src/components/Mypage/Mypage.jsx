import React, { useState } from 'react'
import Calendar from 'react-calendar'

import MypageHeader from './MypageHeader'
import mypage_option from '../../assets/img/mypage_option.png'
import goback from '../../assets/img/mypage_backward.png'
import MypageButton from './MypageButton'
import { Link } from 'react-router-dom'

const Mypage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  function handleDateChange (date) {
    setSelectedDate(date)
  }
  return (
    <div className='mypage-wrap'>
      <div className='mypage-image'>
        <Link to={'/'}><img src={goback} alt='gobackimage' style={{ width: 11 }} /></Link> 
        <img src={mypage_option} alt='mypage_option' style={{ width: 20 }} />
      </div>
      <div className='mypage-header-wrap'>
        <MypageHeader name={'이승민'} time={'9시간 40분'} />
      </div>
      <div className='mypage-content-wrap'>
      <Calendar className='' onChange={handleDateChange} value={selectedDate} locale='en-US'/>
      </div>
      <div className='mypage-button-wrap'>
        <MypageButton title={`출퇴근 · 등하교 위치설정`}/>
        <MypageButton title={'관심분야 설정'}/>
      </div>

    </div>
  )
}

export default Mypage