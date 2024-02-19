import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import HistoryHeader from './HistoryHeader'
import HistoryContentItem from './HistoryContentItem'


function History() {
    const { userid, date } = useParams()
    const navigate = useNavigate()
    function handleCheck() {
        navigate('/mypage')
    }
    return (
        <div className='history-wrap'>
            <HistoryHeader userid={userid} date={date} />
            <HistoryContentItem />
            <button className='history-check-button' onClick={handleCheck}>확인</button>
        </div>
    )
}

export default History