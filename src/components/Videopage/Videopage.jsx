import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Return from '../../assets/img/timeset_retrun.svg'
import View from '../../assets/img/video_view.svg'
import { Watch } from "react-loader-spinner";
import axios from 'axios';

const Videopage = () => {
    const [loading, setLoading] = useState(false)
    const [videos, setVideos] = useState(null)

    const fetchFromAPI = async (url) => {
        const { data } = await axios.get(`https://3.34.197.56/api/${url}`);
        return data;
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    useEffect(() => {
        fetchFromAPI(`test/get`)
            .then((data) => {
                console.log(data)
                // setVideo[data.item]
            })
            .catch((error) => {
                console.log("Error", error);
            })
    }, [videos])

    return (
        <div className='video_wrap'>
            {loading ? (
                <>

                    <button className='retrun_btn'>
                        <img src={Return} alt="return" className='return' />
                    </button>
                    <h2><strong>이승민</strong>님이<br /> 손틈새로 공부할 내용 </h2>
                    <div className='video'>
                        {videos ? (
                            <>
                                {videos.map((video, key) => {
                                    <div className="video_detail" key={key}>
                                        <div className="header">
                                            <h3>{video.videos.categoryId}</h3>
                                            <div>
                                                <img src={View} alt="view" />
                                                <p>{video.videos.runTime}</p>
                                            </div>
                                        </div>
                                        <Link to={video.videos.url}>
                                            <div className="video_box">
                                                <div>
                                                    <p className='cate'>{video.videos.categoryId}</p>
                                                    <h4>{video.videos.videoTitle}</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                })}
                            </>
                        ) : (
                            <>
                                <div className="video_detail">
                                    <div className="header">
                                        <h3>경제/금융</h3>
                                        <div>
                                            <img src={View} alt="view" />
                                            <p>13M</p>
                                        </div>
                                    </div>
                                    <Link to='/videopage/1'>
                                        <div className="video_box">
                                            <div>
                                                <p className='cate'>경제/금융</p>
                                                <h4>주식으로 돈 버는 방법</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </>

                        )}

                    </div >
                    <button className='choose'>확인</button>
                </>
            ) : (
                <div className='loading'>
                    <p className='text'>효율적인</p>
                    <h3>40분</h3>
                    <p><strong>알차게</strong> 구성 중</p>
                    <Watch
                        visible={true}
                        height="75"
                        width="75"
                        radius="48"
                        color="#FF6D6D"
                        ariaLabel="watch-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            )}

        </div >
    )
}

export default Videopage