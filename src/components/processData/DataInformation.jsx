import React from 'react'
import { Country } from "../../assets/env"

const DataInformation = ({ data }) => {
   const dts = data.response;

   function CounterFlag(flag) {
      return <img alt="Country flag" src={`https://flagcdn.com/24x18/${flag.toLowerCase()}.png`} />
   }
   function CountryName(code) {
      return code === "UK" ? code : Country[code]
   }
   function UTCtoIST(t) {
      let vr = typeof t === 'string' ? new Date(t + 'Z') : new Date(t * 1000);
      return vr.toLocaleString().replace(':00', '');
   }
   function AirlineFlag(logo) {
      return <div id="logo-div"><img alt="Airline flag" src={`https://airlabs.co/img/airline/m/${logo}.png`} id='logo' /></div>;
   }
   
   return (
      <>
         <div className="DataInformation">
            { data.error && <b>{ data.error.message }</b> }
            { !Object.keys(dts).length && <em>No data found!</em> }
            { Object.keys(dts).length &&
               <div id="data">
                  {/* Departure */}
                  { dts.dep_name && <>Departure: <b>{dts.dep_name}, {dts.dep_city}, {CountryName(dts.dep_country)} {CounterFlag(dts.dep_country)}</b><br/></> }
                  { dts.dep_icao && <>Departure ICAO/IATA: <b>{`${dts.dep_icao}/${dts.dep_iata}`}</b><br/></> }
                  { dts.dep_terminal && <>Terminal: <b>{dts.dep_terminal}</b><br/></> }
                  { dts.dep_gate && <>Gate: <b>{dts.dep_gate}</b><br/></> }
                  { dts.dep_time_utc && <>Departure time: <b>{UTCtoIST(dts.dep_time_utc)}</b><br/></> }
                  {/* { line 163 - 171 } */}

                  {/* Airline */}
                  { dts.airline_name && <>Airline: <b>{dts.airline_name} {AirlineFlag(dts.airline_iata)}</b><br/></> }
                  { dts.airline_icao && <>Airline ICAO/IATA: <b>{dts.airline_icao}/{dts.airline_iata}</b><br/></> }
                  { dts.airline_icao && <>Airline ICAO/IATA: <b>{dts.airline_icao}/{dts.airline_iata}</b><br/></> }
               </div>
            }
         </div>
      </>
   );
}
 
export default DataInformation;