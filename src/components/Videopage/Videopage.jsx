import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Return from '../../assets/img/timeset_retrun.svg';
import View from '../../assets/img/video_view.svg';
import { Watch } from "react-loader-spinner";
import axios from 'axios';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { fetchUserInfo } from '../../api/fetchUserInfo';
import { useQuery } from 'react-query';

const Videopage = () => {
    const { data, isLoading } = useQuery('userInfomation', () => fetchUserInfo('lhj6364'));
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    const [second, setTimesecond] = useState(0);

    useEffect(() => {
        if (data) {
            setTimesecond(data.data.time * 60);
        }
        console.log(data)
    }, [data]);

    useEffect(() => {
        if (data) {
            axios.get(`https://3.34.197.56/api/video/recommend/${data.data.userId}?time=${second}`)
                .then((res) => {
                    console.log(res.data.data.videos);
                    setVideos(res.data.data.videos);
                    console.log(videos)
                });
        }
    }, [second]);

    const goBack = () => {
        navigate(-1);
    };


    return (
        <>
            <Nav />
            <div className='video_wrap'>
                {isLoading && data ? (
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
                ) : (
                    <>
                        <button className='retrun_btn'  onClick={goBack} >
                            <img src={Return} alt="return" className='return' />
                        </button>
                        <h2><strong>이승민</strong>님이<br /> 손틈새로 공부할 내용 </h2>
                        <div className='video'>
                            {videos.length > 0 ? (
                                <>
                                    {videos.map((video, key) => (
                                        <div className="video_detail" key={key}>
                                            <div className="header">
                                                <h3>{video.categoryId}</h3>
                                                <div>
                                                    <img src={View} alt="view" />
                                                    <p>{video.runTime}</p>
                                                </div>
                                            </div>
                                            <Link to={video.url}>
                                                <div className="video_box">
                                                    <div>
                                                        <p className='cate'>{video.categoryId}</p>
                                                        <h4>{video.videoTitle}</h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <p>영상이 준비되지 않았어요!</p>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Videopage;
