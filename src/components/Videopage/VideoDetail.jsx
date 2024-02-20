import React from 'react'
import ReactPlayer from 'react-player'

const VideoDetail = () => {
    return (
        <body className='app'>
            <div className='VideoDetail_wrap'>
                <ReactPlayer
                    height='360px'
                    playing={true}
                    url={`https://a-minute-society.s3.ap-northeast-2.amazonaws.com/videos/example.mp4`}
                    muted={true}
                    controls={true}
                    light={false}
                    pip={true}
                    rotate='90'
                />
            </div>
        </body>
    )
}

export default VideoDetail