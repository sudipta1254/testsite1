import React from 'react'
// import { Country } from "../../assets/env"

const DataRealtime = ({ data, id }) => {
   const dts = data.response;

   // function CounterFlag(flag) {
   //    return <img alt="Country flag" src={`https://flagcdn.com/24x18/${flag.toLowerCase()}.png`} />
   // }
   // function CountryName(code) {
   //    return code === "UK" ? code : Country[code]
   // }
   // function UTCtoIST(t) {
   //    let vr = typeof t === 'string' ? new Date(t + 'Z') : new Date(t * 1000);
   //    return vr.toLocaleString().replace(':00', '');
   // }
   // function AirlineFlag(logo) {
   //    return <div id="logo-div"><img alt="Airline flag" src={`https://airlabs.co/img/airline/m/${logo}.png`} id='logo' /></div>;
   // }
   
   return (
      <div className="DataRealtime">
         { data.error && <b>{ data.error.message }</b> }
         { !Object.keys(dts).length && <em>No data found!</em> }
         { Object.keys(dts).length &&
            <div id="data">
               <h1>Data realtime</h1>
               <h2>{ id } { dts.length }</h2>
            </div>
         }
      </div>
   );
}
 
export default DataRealtime;