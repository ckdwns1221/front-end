import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TimesetChoose = ({ setShow, setAll, setChoose, choosestart, choosearrive, setChoosestart, setChoosearrive }) => {
    const [done, setDone] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [second, setSecond] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const onSubmit = () => {
        if (choosestart === '출발지' || choosearrive === '도착지') {
            alert('출발지 및 도착지를 모두 설정해주세요!')
            return
        }

        setDone(true)
        setIsDisabled(true)

        const queryParams = {
            params: {
                distance: choosestart,
                arrive: choosearrive
            }
        };

        axios.get('https://3.34.197.56/api/distance/get', queryParams)
            .then(response => {
                console.log('API 요청이 성공했습니다.', response.data);
                setSecond(response.data.data)
            })
            .catch(error => {
                console.error('API 요청이 실패했습니다.', error);
            });

    };

    useEffect(() => {
        setMinutes(Math.floor(second / 60));

        const RequestBody = {
            time: minutes
          };
      

        axios.put('https://3.34.197.56/api/users/ooooo0516/change-time', RequestBody)
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.error(error);
            });
    }, [second])

    return (
        <>
            <div className="timeset">
                <button disabled={isDisabled} className='timeset_btn setStart' onClick={() => { setChoose('출발지'); setAll(false) }}>{choosestart}<div className='check_start'></div></button>
                <button disabled={isDisabled} className='timeset_btn setArrive' onClick={() => { setChoose('도착지'); setAll(false) }}>{choosearrive}<div className='check_arrive'></div></button>
            </div>

            {done ? (
                <p className='time'><strong>{minutes}분</strong>소요</p>
            ) : (
                <div className="change">
                    <button onClick={() => { setShow(true); setChoosestart('출발지'); setChoosearrive('도착지') }}>직접 입력하기</button >
                    <button onClick={() => { onSubmit() }}>완료</button>
                </div >
            )}

        </>
    )
}

export default TimesetChoose