import React from 'react'
import ReactPlayer from 'react-player'

function MainMoreItems({dummydata}) {
  return (
    <ul className='main-content-wrap'>
      {dummydata.map((dummy) => (
        <>
          <li key={dummy.id} className='main-content-video'>
            <div className='video-container'>
              <ReactPlayer
                url={dummy.videoUrl}
                className='react-player'
                width='100%'
                height='100%'
                controls={true}
              />
            </div>
            <div className='main-content-footer'>
              <div className='main-letter-wrap'>
                <p className='main-footer-category'>{dummy.category}</p>
                <p className='main-footer-title'>{dummy.title}</p>
              </div>
              
            </div>
          </li >
        </>
      ))}
    </ul>
  )
}

export default MainMoreItems