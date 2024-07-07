import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import FetchData from "./fetch/FetchData"
import DataRealtime from "./processData/DataRealtime"
import { SortFlight } from './helper/Helper';

const Realtime = () => {
   const { id } = useParams();
   const [searchParams] = useSearchParams()

   let key = id ? process.env.REACT_APP_KEY : ""

   let { error, loading, data } = FetchData(`https://airlabs.co/api/v9/flights?api_key=${key}&airline_iata=${id}`)

   if (searchParams.get("flight_number_a") || searchParams.get("flight_number_d")) SortFlight(searchParams.get("sort"), data?.response)

   return (
      <div className="Realtime">
         { error && <div>{ error }</div> }
         { loading && <div>Loading...</div> }
         { data && <DataRealtime data={data} /> }
      </div>
   );
}
 
export default Realtime;