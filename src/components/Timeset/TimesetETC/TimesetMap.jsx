import React from 'react'
import PlaceRed from '../../../assets/img/timeset_placered.svg'
import PlaceBlue from '../../../assets/img/timeset_placeblue.svg'
import Place from '../../../assets/img/timeset_place.svg'

const TimesetMap = ({ show, setShow, choosearrive, props, choosestart }) => {

    return (
        <div className="map">
            {props === '출발지' ? (
                <>
                    <div>
                        <img src={PlaceBlue} alt="place" />
                        <img src={Place} alt="place" />
                    </div>
                    <div className="bar"></div>
                    <button className='timeset_btn' onClick={() => { setShow(!(show)) }}>{choosestart}</button>
                </>
            ) : (
                <>
                    <div>
                        <img src={Place} alt="place" />
                        <img src={PlaceRed} alt="place" />
                    </div>
                    <div className="bar"></div>
                    <button className='timeset_btn' onClick={() => { setShow(!(show)) }}>{choosearrive}</button>
                </>
            )}
        </div >
    )
}

export default TimesetMap