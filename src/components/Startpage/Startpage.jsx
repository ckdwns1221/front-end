import React from 'react'
import logoImage from '../../assets/img/logo.png'
import humanImage from '../../assets/img/start_human.png'

const Startpage = () => {
    return (
        <div className='start_wrap'>
            <div className="header">
                <div className="logo">
                    <img src={logoImage} alt="Logo" />
                    <h2>손틈새로</h2>
                </div>
                <p>출퇴근 통학 틈새시간 <strong>손틈새로</strong>공부</p>
            </div>
            <div className="picture">
                <img src={humanImage} alt="human" />
            </div>
        </div>
    )
}

export default Startpage