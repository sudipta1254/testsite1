import React from 'react'

const DataInformation = ({ data }) => {
   const dts = data.response;
   
   return (
      <>
         <div className="DataInformation">
            { data.error && <b>{ data.error.message }</b> }
            { !Object.keys(dts).length && <em>No data found!</em> }
            { Object.keys(dts).length && <>
               {console.log(dts)}
               { dts.dep_name && <>Departure: <b>{dts.dep_name}, {dts.dep_city}, {(dts.dep_country)} {(dts.dep_country)}</b><br/></> }
               { dts.dep_icao && <>Departure ICAO/IATA: <b>{`${dts.dep_icao}/${dts.dep_iata}`}</b><br/></> }
               { dts.dep_terminal && <>Terminal: <b>{dts.dep_terminal}</b><br/></> }
            </> }
         </div>
      </>
   );
}
 
export default DataInformation;