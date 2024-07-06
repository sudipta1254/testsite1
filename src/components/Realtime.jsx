import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import FetchData from "./fetch/FetchData"
import DataRealtime from "./processData/DataRealtime"
import { SortFlight } from './helper/Helper';

const Realtime = () => {
   const { id } = useParams();
   const [searchParams] = useSearchParams()
   console.log(searchParams.get("sort"))

   let key = id ? process.env.REACT_APP_KEY : ""

   let { error, loading, data } = FetchData(`https://airlabs.co/api/v9/flights?api_key=${key}&airline_iata=${id}`)

   SortFlight(searchParams.get("sort"), data?.response)

   return (
      <div className="Realtime">
         { error && <div>{ error }</div> }
         { loading && <div>Loading...</div> }
         { data && <DataRealtime data={data} /> }
      </div>
   );
}
 
export default Realtime;