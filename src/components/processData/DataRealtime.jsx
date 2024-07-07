import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { SortFlight } from '../helper/Helper';
import { CountryName, CountryFlag, AirlineFlag, UTCtoIST } from "../helper/Helper"

const DataRealtime = ({ data }) => {
   const dts = data.response;

   const [searchParams] = useSearchParams()
   console.log('sort', searchParams.get("sort"))
   SortFlight(searchParams.get("sort"), data?.response)
   
   return (
      <div className="DataRealtime">
         { data.error && <b>{ data.error.message }</b> }
         { !dts.length ? <em>No data found!</em> :
            <div id="data">
               {dts.map((d, i) => (
                  <div key={i}>
                  { d.reg_number && <>Registration: <b>{d.reg_number}</b><br/></> }
                  { d.reg_number && <>Flag: <b>{CountryName(d.flag)} {CountryFlag(d.flag)}</b><br/></> }
                  { d.lat && <>Position: <b>{d.lat.toFixed(2)}, {d.lng.toFixed(2)}</b><br/></> }
                  { d.alt && <>Altitude: <b>{(d.alt*3.28).toFixed(0)} ft</b><br/></> }
                  { d.dir && <>Direction: <b>{d.dir}°</b><br/></> }
                  { d.speed && <>Speed: <b>{d.speed} Kmph</b><br/></> }
                  { d.v_speed && <>Speed: <b>{d.v_speed} Kmph</b><br/></> }
                  { d.squawk && <>Squawk: <b>{d.squawk}</b><br/></> }
                  { d.flight_number && <>Flight Number: <b>{d.flight_number}</b><br/></> }
                  { d.flight_icao && <>Flight ICAO/IATA: <b>{d.flight_icao}/{d.flight_iata}</b><br/></> }
                  { d.dep_icao && <>Departure ICAO/IATA: <b>{d.dep_icao}/{d.dep_iata}</b><br/></> }
                  { d.airline_icao && <>Arrival ICAO/IATA: <b>{d.arr_icao}/{d.arr_iata}</b><br/></> }
                  { d.airline_icao && <>Airline ICAO/IATA: <b>{d.airline_icao}/{d.airline_iata} {AirlineFlag(d.airline_iata)}</b><br/></> }
                  { d.aircraft_icao && <>Aircraft ICAO: <b>{d.aircraft_icao}</b><br/></> }
                  { d.updated && <>Updated: <b>{UTCtoIST(d.updated)}</b><br/></> }
                  { d.status && <>Status: <b>{d.status}</b><br/></> }
                  { d.type && <>Type: <b>{d.type}</b><hr/></> }
                  </div>
               ))}
            </div>
         }
      </div>
   );
}
 
export default DataRealtime;