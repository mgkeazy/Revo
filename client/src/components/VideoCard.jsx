import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
//   console.log(info);
  return (
    <div className="p-2 w-full sm:w-[400px] m-3 shadow-2xl">
      <img
        className="rounded-xl w-full  object-cover"
        src={thumbnails?.medium?.url || thumbnails?.standard?.url}
        alt="thumbnail"
      />
      <div className="flex mt-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={thumbnails?.medium?.url || thumbnails?.standard?.url}
          alt="channel"
        />
        <div className="ml-3">
          <p className="font-semibold text-sm line-clamp-2">{title}</p>
          <p className="text-xs text-gray-500">{channelTitle}</p>
          <p className="text-xs text-gray-500">
            {(Number(statistics?.viewCount) / 1e6).toFixed(1)}M views
          </p>
        </div>
      </div>
    </div>
  );
};

export const RedVideoCard = ({info})=>{
  return(
    <div className='border border-red-600'>
      <VideoCard info={info}/>
    </div>
  )
}
export default VideoCard;
