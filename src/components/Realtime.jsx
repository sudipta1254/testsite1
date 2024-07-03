import React from 'react'
import { useParams } from 'react-router-dom';
import FetchData from "./fetch/FetchData"


const Realtime = () => {
   const { id } = useParams();
   id && console.log(id)
   let { error, loading, data } = FetchData(`https://airlabs.co/api/v9/flights?api_key=5dbaf919-6297-43d4-bf12-b155f0a70d5&airline_iata=aa`)

   return (
      <div className="Realtime center">
         <h1>Realtime - { id }</h1>
         { error && <div>{ error }</div> }
         { loading && <div>Loading...</div> }
         { data && console.log(data) }
      </div>
   );
}
 
export default Realtime;