import React, { useEffect, useState } from 'react'
import Place from '../../assets/img/timeset_place.svg'
import PlaceBlue from '../../assets/img/timeset_placeblue.svg'
import PlaceRed from '../../assets/img/timeset_placered.svg'
import Map from '../../assets/img/timeset_map.svg'
import Return from '../../assets/img/timeset_retrun.svg'

const TimesetTop = ({ setShow, setWitch, witch, show, choosestart, choosearrive }) => {
    const [PlaceIcon, setPlaceIcon] = useState(0)

    useEffect(() => {

        console.log('choosestart', choosestart)
        console.log('choosearrive', choosearrive)

        if (choosestart === '출발지' && choosearrive === '도착지') {
            setPlaceIcon(0)
        } else if (choosestart !== '출발지' && choosearrive === '도착지') {
            setPlaceIcon(1)
        } else if (choosestart === '출발지' && choosearrive !== '도착지') {
            setPlaceIcon(2)
        } else {
            setPlaceIcon(3)
        }

    }, [choosestart, choosearrive])

    return (
        <>
            {show ? (
                <button onClick={() => { setShow(false); setWitch(false) }}>
                    <img src={Return} alt="return" className='return' />
                </button>
            ) : (
                <></>
            )}
            <img src={Map} alt="map" className='mapSvg' />
            <p>
                <strong>이승민</strong>님의<br />
                출퇴근/등하교<br />
                <strong>소요시간</strong>은
            </p>
            <div className="map">
                <div>
                    {witch ? (
                        <>
                            <img src={PlaceBlue} alt="place" />
                            <img src={PlaceRed} alt="place" />
                        </>
                    ) : (
                        <>
                            {PlaceIcon === 0 ? (
                                <>
                                    <img src={Place} alt="place" />
                                    <img src={Place} alt="place" />
                                </>
                            ) : (
                                <>
                                    {PlaceIcon === 1 ? (
                                        <>
                                            <img src={PlaceBlue} alt="place" />
                                            <img src={Place} alt="place" />
                                        </>
                                    ) : (
                                        <>
                                            {PlaceIcon === 2 ? (
                                                <>
                                                    <img src={Place} alt="place" />
                                                    <img src={PlaceRed} alt="place" />
                                                </>
                                            ) : (
                                                <>
                                                    {PlaceIcon === 3 ? (
                                                        <>
                                                            <img src={PlaceBlue} alt="place" />
                                                            <img src={PlaceRed} alt="place" />
                                                        </>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
                <div className="bar"></div>
            </div >
        </>
    )
}

export default TimesetTop