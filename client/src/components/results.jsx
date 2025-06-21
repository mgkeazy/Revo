import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_NAME_RESULTS } from './constants';
import SearchVideoCard from './SearchVideoCard';
import ShimmerSearchCard from './ShimmerSearchCard';
import { Link } from 'react-router-dom';

const Results = () => {
  const [serachParams] = useSearchParams()
  const query = serachParams.get("search_query");
  const url = YOUTUBE_SEARCH_NAME_RESULTS(query)

  const [searchData,  setSearchData] = useState([]);

  console.log(query)

  const getSearchData = async ( ) =>{
    const data = await fetch(url);
    const json = await data.json()
    console.log(json)
    setSearchData(json.items)
  }

  useEffect(()=>{
    getSearchData();
  },[query])


  return (
<div>
    {
      searchData.map((data) => (
        <Link to={`/watch?v=${data?.id?.videoId}`} key={data?.etag}>
          <SearchVideoCard
            videoId={data?.id?.videoId}
          />
        </Link>
      ))
    }
  </div>
  )
}

export default Results