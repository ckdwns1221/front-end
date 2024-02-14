import React, { useState } from 'react'

const TimesetChoose = ({ setShow, setAll, setChoose, choosestart, choosearrive, setChoosestart, setChoosearrive }) => {
    const [done, setDone] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    const onSubmit = () => {
        if (choosestart === '출발지' || choosearrive === '도착지') {
            alert('출발지 및 도착지를 모두 설정해주세요!')
            return
        }

        setDone(true)
        setIsDisabled(true)
    }

    return (
        <>
            <div className="timeset">
                <button disabled={isDisabled} className='timeset_btn setStart' onClick={() => { setChoose('출발지'); setAll(false) }}>{choosestart}<div className='check_start'></div></button>
                <button disabled={isDisabled} className='timeset_btn setArrive' onClick={() => { setChoose('도착지'); setAll(false) }}>{choosearrive}<div className='check_arrive'></div></button>
            </div>

            {done ? (
                <p className='time'><strong>40분</strong>소요</p>
            ) : (
                <div className="change">
                    {choosestart !== '출발지' && choosearrive !== '도착지' ? (
                        <p><strong>40분</strong>소요</p>
                    ) : (
                        <></>
                    )}
                    <button onClick={() => { setShow(true); setChoosestart('출발지'); setChoosearrive('도착지') }}>직접 입력하기</button >
                    <button onClick={() => { onSubmit() }}>완료</button>
                </div >
            )}

        </>
    )
}

export default TimesetChoose