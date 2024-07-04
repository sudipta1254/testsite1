import React from 'react'
import { Country } from "../../assets/env"

const DataInformation = ({ data }) => {
   const dts = data.response;

   function CounterFlag(flag) {
      return <img alt="Airline flag" src={`https://flagcdn.com/24x18/${flag.toLowerCase()}.png`} />
   }
   function CountryName(code) {
      return code === "UK" ? code : Country[code]
   }
   
   return (
      <>
         <div className="DataInformation">
            { data.error && <b>{ data.error.message }</b> }
            { !Object.keys(dts).length && <em>No data found!</em> }
            { Object.keys(dts).length && <>
               { dts.dep_name && <>Departure: <b>{dts.dep_name}, {dts.dep_city}, {CountryName(dts.dep_country)} {CounterFlag(dts.dep_country)}</b><br/></> }
               { dts.dep_icao && <>Departure ICAO/IATA: <b>{`${dts.dep_icao}/${dts.dep_iata}`}</b><br/></> }
               { dts.dep_terminal && <>Terminal: <b>{dts.dep_terminal}</b><br/></> }
               { dts.dep_terminal && <>Terminal: <b>{dts.dep_terminal}</b><br/></> }
            </> }
         </div>
      </>
   );
}
 
export default DataInformation;