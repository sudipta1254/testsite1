import React from 'react'
import { useParams } from 'react-router-dom';
import FetchData from './fetch/FetchData';
import DataInformation from './processData/DataInformation';

const Information = () => {
   const { id } = useParams();
   id && console.log(id)

   let key = "";
   key = id ? "5dbaf919-6297-43d4-bf12-b155f0a70d55" : key

   let { error, loading, data } = FetchData(`https://airlabs.co/api/v9/flight?api_key=${key}&flight_iata=${id}`)

   return (
      <div className="Information center">
         {/* <h1>Information - { id }</h1> */}
         { error && <div>{ error }</div> }
         { loading && <div>Loading...</div> }
         { data && <DataInformation data={data} /> }
      </div>
   );
}

export default Information;

// const dt = [{"hex":"A9C151","reg_number":"N728AN","flag":"US","lat":42.61596,"lng":-87.260902,"alt":10627,"dir":53.6,"speed":1058,"v_speed":0,"flight_number":"20","flight_icao":"AAL20","flight_iata":"AA20","dep_icao":"KDFW","dep_iata":"DFW","arr_icao":"EGLL","arr_iata":"LHR","airline_icao":"AAL","airline_iata":"AA","aircraft_icao":"B77W","updated":1720061162,"status":"en-route","type":"adsb"}];