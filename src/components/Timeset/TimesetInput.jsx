import React from 'react'
import postTime from '../../api/postTime'

const TimesetInput = ({ time, setTime, setWitch, witch }) => {

    const onSubmit =  async(time) => {
        if (!(time)) {
            alert("시간을 입력해주세요!")
            return
        }
        setWitch(true)
        // 임시 코드 삭제할 예정
        try{
            const response = await postTime({userId:'lhj6364',time})
            console.log("time: ",time)
            
          }
          catch(error){
            console.log(error)
          }
    }
    

    return (
        <div className='userinput'>
            {witch ? (
                <>
                    <p>{time}분 <strong>소요</strong></p>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={time}
                        onKeyDown={(e) => {
                            if (!(e.key === 'Backspace' || /\d/.test(e.key))) {
                                e.preventDefault();
                            }
                        }}
                        onChange={(e) => { setTime(e.currentTarget.value) }} />
                    <p>분</p>
                    <button onClick={() => onSubmit(time)}>확인</button>
                </>
            )}
        </div>
    )
}

export default TimesetInput