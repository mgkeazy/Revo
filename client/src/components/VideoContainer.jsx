import React, { useState, useEffect } from 'react'
import { YOUTUBE_API } from './constants';
import VideoCard, {RedVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerVideoCard from './ShimmerVideoCard';

const VideoContainer = () => {

    const [videosData,setVideosData] = useState([]);

    const getVideos = async () =>{
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();

        setVideosData(json.items);
    }

    useEffect(()=>{
        getVideos();
    },[])

    const id=123;

  return (
    <div>
        {videosData.length===0 ? (
            <div className='flex flex-1 flex-wrap overflow-y-auto'>
                {Array.from({length:40}).map((_,i)=>(
                    <ShimmerVideoCard key={i}/>
                ))}
            </div>
        ) : (
            <div className='flex flex-1 flex-wrap overflow-y-auto'>
                {/* <RedVideoCard info={videosData[0]}/> */}
                {videosData.map((info)=>{
                    return(
                        <Link key={info?.id} to={`watch?v=${info?.id}`}><VideoCard info={info}></VideoCard></Link>
                    )
                })}
            </div>
        )}
    </div>

  )
}

export default VideoContainer