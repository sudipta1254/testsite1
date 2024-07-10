import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import FetchData from './fetch/FetchData';
import DataInformation from './processData/DataInformation';

const Information = () => {
   const { id } = useParams();
   const [searchParams] = useSearchParams()

   const KEY = id ? process.env.REACT_APP_KEY1 : "";
   const code = searchParams.get("code");

   let { error, loading, data } = FetchData(`https://airlabs.co/api/v9/flight?api_key=${KEY}&flight${code}=${id}`)

   return (
      <div className="Information">
         { error && <b className="error-text">{ error }</b> }
         { loading && <div id="msgBox"></div> }
         { data && <DataInformation data={data} /> }
      </div>
   );
}

export default Information;