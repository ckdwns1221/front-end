import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import TimesetSwiper from './TimesetETC/TimesetSwiper'
import TimesetMap from './TimesetETC/TimesetMap'
import TimesetRetrun from './TimesetETC/TimesetRetrun';

const TimesetArrive = ({ choosearrive, setChoosearrive, setAll }) => {
    const [show, setShow] = useState(false)
    const [choose, setChoose] = useState('도착지');

    useEffect(() => {
        setChoosearrive(choose)
        if (choosearrive !== '도착지') {
            document.querySelector('.timeset_btn').style.backgroundColor = '#EAF2FF';
        }
    }, [choose, setChoosearrive, choosearrive])

    return (
        <div className='timeset_wrap'>
            <TimesetRetrun setAll={setAll} props={'도착지'} />
            <TimesetMap setShow={setShow} choose={choose} show={show} choosearrive={choosearrive} props={'도착지'} />
            <div className="choose_start">
                {/* 지도 들어가는 자리입니다 */}
            </div>
            <TimesetSwiper show={show} setChoose={setChoose} setAll={setAll} />
        </div>
    )
}

export default TimesetArrive