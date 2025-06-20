import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import Livechat from './Livechat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className='flex h-full w-full min-h-screen'>
      {/* Left Side */}
      <div className='flex flex-col flex-[3] p-4'>
        <div className='w-full'>
          <iframe
            className='w-full h-[500px] rounded-md'
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <CommentContainer />
      </div>

      {/* Right Side */}
      <Livechat/>
    </div>
  );
};

export default WatchPage;
