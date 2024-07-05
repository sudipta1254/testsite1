import React from 'react'
import { useParams } from 'react-router-dom';
import FetchData from "./fetch/FetchData"
import DataRealtime from "./processData/DataRealtime"

const Realtime = ({ inpRealtime }) => {
   const { id } = useParams();
   id && console.log(3, id)

   let key = "";
   key = id ? "5dbaf919-6297-43d4-bf12-b155f0a70d55" : key

   let { error, loading, data } = FetchData(`https://airlabs.co/api/v9/flights?api_key=${key}&airline_iata=${id}`)

   return (
      <div className="Realtime">
         {/* <h1>Realtime - { id }</h1> */}
         { error && <div>{ error }</div> }
         { loading && <div>Loading...</div> }
         { data && <DataRealtime data={data} id={id} /> }
      </div>
   );
}
 
export default Realtime;