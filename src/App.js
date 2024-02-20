import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Join from './components/Join/Join'
import Mypage from './components/Mypage/Mypage'
import Startpage from './components/Startpage/Startpage'
import Timeset from './components/Timeset/Timeset'
import Videopage from './components/Videopage/Videopage'
import JoinCollect from './components/Join/JoinCollect'
import LoginCollect from './components/Login/LoginCollect'
import TimesetStart from './components/Timeset/TimesetStart'
import MoreRecommend from './components/Main/More/MoreRecommend'
import MoreScrab from './components/Main/More/MoreScrab'
import Favorite from './components/Favorite/FavoritePage'
import History from './components/Mypage/History/History'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/aboutRecommend' element={<MoreRecommend />} />
        <Route path='/aboutScrab' element={<MoreScrab />} />
        <Route path='/favorite' element={<Favorite />} />

        <Route path='/login' element={< Login />} />
        <Route path='/logincollect' element={< LoginCollect />} />

        <Route path='/join' element={< Join />} />
        <Route path='/joincollect' element={< JoinCollect />} />

        <Route path='/mypage' element={< Mypage />} />
        <Route path='/mypage/:userid/:date' element={<History/> }/>

        <Route path='/startpage' element={< Startpage />} />

        <Route path='/timeset' element={< Timeset />} />
        <Route path='/timesetplace' element={< TimesetStart />} />

        <Route path='/videopage' element={< Videopage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App