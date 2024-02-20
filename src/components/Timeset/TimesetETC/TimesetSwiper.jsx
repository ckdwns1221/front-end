import React, { useState } from 'react'
import Subway from '../../../assets/img/timeset_subway.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { height } from '../js/anime';

const TimesetSwiper = ({ show, setChoose, setAll }) => {
    const Array = ['인헌시장', '낙성대역', '서울대입구역', '홍대입구역', '역삼역']
    const [selectedSlide, setSelectedSlide] = useState(null);

    const handleSlideClick = (map, index) => {
        setChoose(map);
        setSelectedSlide(index);
    };

    return (
        <>
            {show ? (
                <motion.div
                    variants={height} initial="initial" animate="enter" exit="exit"
                >
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper swiper"
                    >
                        {Array.map((map, key) => (
                            <SwiperSlide
                                key={key}
                                onClick={() => { handleSlideClick(map, key); }}
                                className={selectedSlide === key ? 'selected' : ''}
                            >
                                <img src={Subway} alt="subway" className='subway' />
                                <p>{map}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            ) : (
                <></>
            )}
            <div className='start_btn'>
                <button onClick={() => { setAll(true) }}>확인</button>
            </div>
        </>
    )
}

export default TimesetSwiper