import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import FetchData from "./fetch/FetchData"
import DataRealtime from "./processData/DataRealtime"
import { SortFlight } from './helper/Helper';

const Realtime = () => {
   const { id } = useParams();
   const [searchParams] = useSearchParams()

   const KEY = id ? process.env.REACT_APP_KEY1 : "";
   const type = searchParams.get("type");
   const code = searchParams.get("code");
   const sort = searchParams.get("sort");

   let { error, loading, data } = FetchData(`https://airlabs.co/api/v9/flights?api_key=${KEY}&${type}${code}=${id}`)

   if (sort) SortFlight(sort, data?.response)

   return (
      <div className="Realtime">
         { error && <div>{ error }</div> }
         { loading && <div>Loading...</div> }
         { data && <DataRealtime data={data} /> }
      </div>
   );
}
 
export default Realtime;