import React from 'react'

const dummydata = [{
    id: 1,
    category: '경제/금융',
    title: '주식으로 돈 버는법',
    videoUrl: 'https://youtu.be/CTpbD4Y0IFU?si=ja7sjUW1vzZ7fEaq',
    time: '13',
  }, {
    id: 2,
    category: '마케팅',
    title: '소비자의 마음을 사로잡는 커피',
    videoUrl: 'https://youtu.be/kHp6qLsyu-U?si=_MM6lyoDBycnLiZH',
    time: '18',
  },
  {
    id: 3,
    category: '마케팅',
    title: '4P, 3C? 시장분석 용어정리',
    videoUrl: 'https://youtu.be/kHp6qLsyu-U?si=_MM6lyoDBycnLiZH',
    time: '18',
  },
  ]

function MoreItems() {
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

export default MoreItems