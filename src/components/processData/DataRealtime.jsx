import React from 'react'
import { CountryName, CountryFlag, AirlineFlag, Interval } from "../helper/Helper"

const DataRealtime = ({ data, id }) => {
   const dt = data.response[0];
   
   return (
      <div className="DataRealtime">
         { data.error && <b>{ data.error.message }</b> }
         { !Object.keys(dt).length && <em>No data found!</em> }
         { Object.keys(dt).length &&
            <div id="data">
               { dt.reg_number && <>Registration: <b>{dt.reg_number}</b><br/></> }
               { dt.reg_number && <>Flag: <b>${CountryName(dt.flag)} ${CountryFlag(dt.flag.toLowerCase())}</b><br/></> }
               { dt.lat && <>Position: <b>${dt.lat.toFixed(2)}, ${dt.lng.toFixed(2)}</b><br/></> }
               { dt.alt && <>Altitude: <b>${(dt.alt*3.28).toFixed(0)} ft</b><br/></> }
               { dt.dir && <>Direction: <b>${dt.dir}°</b><br/></> }
               { dt.speed && <>Speed: <b>{dt.speed} Kmph</b><br/></> }
               { dt.v_speed && <>Speed: <b>{dt.v_speed} Kmph</b><br/></> }
               { dt.squawk && <>Squawk: <b>{dt.squawk}</b><br/></> }
               { dt.flight_number && <>Flight Number: <b>{dt.flight_number}</b><br/></> }
               { dt.flight_icao && <>Flight ICAO/IATA: <b>{dt.flight_icao}/{dt.flight_iata}</b><br/></> }
               { dt.dep_icao && <>Departure ICAO/IATA: <b>{`${dt.dep_icao}/${dt.dep_iata}`}</b><br/></> }
               { dt.airline_icao && <>Arrival ICAO/IATA: <b>{dt.arr_icao}/{dt.arr_iata}</b><br/></> }
               { dt.airline_icao && <>Airline ICAO/IATA: <b>{dt.airline_icao}/{dt.airline_iata} {AirlineFlag(dt.airline_iata)}</b><br/></> }
               { dt.aircraft_icao && <>Aircraft ICAO: <b>{dt.aircraft_icao}</b><br/></> }
               { dt.updated && <>Updated: <b>${Interval(dt.updated)}</b><br/></> }
               { dt.status && <>Status: <b>${dt.status}</b><br/></> }
               { dt.type && <>Type: <b>${dt.type}</b><br/></> }
            </div>
         }
      </div>
   );
}
 
export default DataRealtime;