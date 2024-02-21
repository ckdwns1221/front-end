import React, { useEffect, useState } from 'react'
import Subway from '../../../assets/img/timeset_subway.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { height } from '../js/anime';

const TimesetSwiper = ({ setShow, show, setChoose, setAll, markers, setSearch }) => {
    const Array = [...markers]
    const [selectedSlide, setSelectedSlide] = useState(null);

    const handleSlideClick = (map, index) => {
        setChoose(map);
        setSearch(map);
        setSelectedSlide(index);
        setShow(false)
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
                                onClick={() => { handleSlideClick(map.content, key); }}
                                className={selectedSlide === key ? 'selected' : ''}
                            >
                                <img src={Subway} alt="subway" className='subway' />
                                <p>{map.content}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            ) : (
                <div className='start_btn'>
                    <button onClick={() => { setAll(true) }}>확인</button>
                </div>
            )}
        </>
    )
}

export default TimesetSwiper