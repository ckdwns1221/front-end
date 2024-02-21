import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import HistoryHeader from './HistoryHeader'
import HistoryContentItem from './HistoryContentItem'


function History() {
    const { userid, date } = useParams()
    const [bookmarkIs,setBookmarkIs] = useState(false)
    const navigate = useNavigate()
    function handleCheck() {
        navigate('/mypage')
    }
    function handleBookmark(){
        setBookmarkIs(!bookmarkIs)
    }
    return (
        <div className='history-wrap'>
            <HistoryHeader userid={userid} date={date} />
            <HistoryContentItem onClick={handleBookmark} bookmarkIs={bookmarkIs}/>
            <button className='history-check-button' onClick={handleCheck}>확인</button>
        </div>
    )
}

export default History