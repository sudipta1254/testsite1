import React from 'react'
import { useParams } from 'react-router-dom';
import FetchData from "./fetch/FetchData"

const Realtime = () => {
   const { id } = useParams();
   id && console.log(id)

   let key = "";
   key = id ? "5dbaf919-6297-43d4-bf12-b155f0a70d55" : key

   let { error, loading, data } = FetchData(`https://airlabs.co/api/v9/flights?api_key=${key}&airline_iata=${id}`)

   return (
      <div className="Realtime center">
         <h1>Realtime - { id }</h1>
         { error && <div>{ error }</div> }
         { loading && <div>Loading...</div> }
         { data && <h1>{ data.response.length }</h1> }
      </div>
   );
}
 
export default Realtime;