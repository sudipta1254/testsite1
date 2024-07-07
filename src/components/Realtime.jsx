import React from 'react'
import { useParams } from 'react-router-dom';
import FetchData from "./fetch/FetchData"
import DataRealtime from "./processData/DataRealtime"

const Realtime = () => {
   const { id } = useParams();

   let key = id ? process.env.REACT_APP_KEY : ""

   let { error, loading, data } = FetchData(`https://airlabs.co/api/v9/flights?api_key=${key}&airline_iata=${id}`)

   return (
      <div className="Realtime">
         { error && <div>{ error }</div> }
         { loading && <div>Loading...</div> }
         { data && <DataRealtime data={data} /> }
      </div>
   );
}
 
export default Realtime;