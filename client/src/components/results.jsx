import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_NAME_RESULTS } from './constants';
import SearchVideoCard from './SearchVideoCard';
import ShimmerSearchCard from './ShimmerSearchCard';

let array = new Array(20).fill(0)

const Results = () => {
  const [serachParams] = useSearchParams()
  const query = serachParams.get("search_query");
  const url = YOUTUBE_SEARCH_NAME_RESULTS(query)

  const [searchData,  setSearchData] = useState([]);

  console.log(searchData)

  const getSearchData = async ( ) =>{
    if (Array.isArray(json.items)) {
      setSearchData(json.items);
    } else {
      console.warn("API response missing items:", json);
      setSearchData([]);
    }
  }

  useEffect(()=>{
    getSearchData();
  },[])

  if(searchData.length===0){
    return(
        <>
            {array.map((ind)=>(
                <ShimmerSearchCard key={ind}/>
            ))}
        </>
    )
  }
  return (
<div>
    {
      searchData.map((data) => (
        <SearchVideoCard
          key={data?.id?.videoId || data?.etag}
          videoId={data?.id?.videoId}
        />
      ))
    }
  </div>
  )
}

export default Results