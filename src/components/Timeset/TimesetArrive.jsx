import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import TimesetSwiper from './TimesetETC/TimesetSwiper'
import TimesetMap from './TimesetETC/TimesetMap'
import TimesetRetrun from './TimesetETC/TimesetRetrun';
import { Map } from "react-kakao-maps-sdk";

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
            <Map
                center={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
                className='choose_start'
            >
            </Map>
            <TimesetSwiper show={show} setChoose={setChoose} setAll={setAll} />
        </div>
    )
}

export default TimesetArrive