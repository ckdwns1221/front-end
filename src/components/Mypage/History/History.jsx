import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { nameState,idState } from '../../Login/Login'
import HistoryHeader from './HistoryHeader'
import HistoryContentItem from './HistoryContentItem'
import fetchCalendarItem from '../../../api/mypage/fetchCalendarItem'

function History() {
    const { userid, date } = useParams()
    const [bookmarkIs,setBookmarkIs] = useState(false)
    const userName = useRecoilValue(nameState)
    const userId = useRecoilValue(idState)
    const [attendanceItems,setAttendanceItems] = useState([]) 
    const navigate = useNavigate()
    function handleCheck() {
        navigate('/mypage')
    }
    function handleBookmark(){
        setBookmarkIs(!bookmarkIs)
    }
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetchCalendarItem({userId,date})
                setAttendanceItems(response.data)
                console.log(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        
        fetchData()
    },[])

    return (
        <div className='history-wrap'>
            <HistoryHeader userid={userName} date={date} />
            <HistoryContentItem onClick={handleBookmark} bookmarkIs={bookmarkIs}/>
            <button className='history-check-button' onClick={handleCheck}>확인</button>
        </div>
    )
}

export default History