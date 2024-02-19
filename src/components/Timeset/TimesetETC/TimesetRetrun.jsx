import React from 'react'
import Map from '../../../assets/img/timeset_map.svg'
import Return from '../../../assets/img/timeset_retrun.svg'

const TimesetRetrun = ({ setAll, props }) => {
    return (
        <>
            <button onClick={() => { setAll(true) }} className='retrun_btn'>
                <img src={Return} alt="return" className='return' />
            </button>
            <img src={Map} alt="map" className='mapSvg' />
            <p className='start'>
                <strong>{props}</strong> 설정
            </p>
        </>
    )
}

export default TimesetRetrun