import React, { useEffect, useState } from 'react';
import { YOUTUBE_GET_VIDEO_BY_ID } from './constants';
import ShimmerSearchCard from './ShimmerSearchCard';

const formatNumber = (num) => {
  if (!num) return "";
  const n = parseInt(num);
  if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toString();
};

let array = new Array(20).fill(0)

const SearchVideoCard = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
  const url = YOUTUBE_GET_VIDEO_BY_ID(videoId);

  const getVideoDataById = async () => {
    try {
        const data = await fetch(url);
        const json = await data.json();

        if (Array.isArray(json.items) && json.items.length > 0) {
            setVideoData(json.items[0]);
        } else {
        console.warn("No video found for ID:", videoId);
        }

    } catch (error) {
        console.error("Failed to fetch video data:", error);
    }
  };

  useEffect(() => {
    getVideoDataById();
  }, []);

  if(!videoData){
    return(
        <>
            {array.map((ind)=>(
                <ShimmerSearchCard key={ind}/>
            ))}
        </>
    )
  }
  return (
    <div className="flex w-full max-w-6xl p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-150">
      <img
        src={videoData?.snippet?.thumbnails?.high?.url}
        alt="video thumbnail"
        className="w-[400px] h-[225px] object-cover rounded-xl flex-shrink-0"
      />
      <div className="flex justify-between w-full ml-6">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-900 line-clamp-2">
            {videoData?.snippet?.title}
          </span>

          <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
            <span className="font-semibold text-gray-800">
              {videoData?.snippet?.channelTitle}
            </span>
            <span className="text-gray-400 text-xs">•</span>
            <span>{formatNumber(videoData?.statistics?.viewCount)} views</span>
          </div>

          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {videoData?.snippet?.description}
          </p>
        </div>

        <div className="text-gray-600 hover:text-black cursor-pointer px-2">
          ⋮
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
