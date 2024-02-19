import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import TimesetSwiper from './TimesetETC/TimesetSwiper'
import TimesetRetrun from './TimesetETC/TimesetRetrun'
import TimesetMap from './TimesetETC/TimesetMap';

const TimesetStart = ({ choosestart, setChoosestart, setAll }) => {
    const [show, setShow] = useState(false)
    const [choose, setChoose] = useState('출발지');

    useEffect(() => {
        setChoosestart(choose)

        if (choosestart !== '출발지') {
            document.querySelector('.timeset_btn').style.backgroundColor = '#EAF2FF';
        }
    }, [choose, setChoosestart, choosestart])

    return (
        <div className='timeset_wrap'>
            <TimesetRetrun setAll={setAll} props={'출발지'} />
            <TimesetMap setShow={setShow} choose={choose} show={show} choosestart={choosestart} props={'출발지'} />
            <div className="choose_start">
                {/* 지도 들어가는 자리입니다 */}
            </div>
            <TimesetSwiper show={show} setChoose={setChoose} setAll={setAll} />
        </div>
    )
}

export default TimesetStart