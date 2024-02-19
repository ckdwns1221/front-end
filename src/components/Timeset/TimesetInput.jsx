import React from 'react'

const TimesetInput = ({ time, setTime, setWitch, witch }) => {

    const onSubmit = () => {
        if (!(time)) {
            alert("시간을 입력해주세요!")
            return
        }
        setWitch(true)
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
                    <button onClick={() => onSubmit()}>확인</button>
                </>
            )}
        </div>
    )
}

export default TimesetInput