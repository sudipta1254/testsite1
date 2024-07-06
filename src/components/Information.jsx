import React from 'react'
import { useParams } from 'react-router-dom';
import FetchData from './fetch/FetchData';
import DataInformation from './processData/DataInformation';

const Information = () => {
   const { id } = useParams();
   
   let key = id ? process.env.REACT_APP_KEY : ""

   let { error, loading, data } = FetchData(`https://airlabs.co/api/v9/flight?api_key=${key}&flight_iata=${id}`)

   return (
      <div className="Information">
         { error && <div>{ error }</div> }
         { loading && <div>Loading...</div> }
         { data && <DataInformation data={data} /> }
      </div>
   );
}

export default Information;