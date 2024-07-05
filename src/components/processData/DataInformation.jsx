import React from 'react'
import { CountryName, CountryFlag, AirlineFlag, Interval, UTCtoIST } from "../helper/Helper"

const DataInformation = ({ data }) => {
   const dts = data.response;
   
   return (
      <div className="DataInformation">
         { data.error && <b>{ data.error.message }</b> }
         { !Object.keys(dts).length && <em>No data found!</em> }
         { Object.keys(dts).length &&
            <div id="data">
               {/* Departure */}
               { dts.dep_name && <>Departure: <b>{dts.dep_name}, {dts.dep_city}, {CountryName(dts.dep_country)} {CountryFlag(dts.dep_country)}</b><br/></> }
               { dts.dep_icao && <>Departure ICAO/IATA: <b>{`${dts.dep_icao}/${dts.dep_iata}`}</b><br/></> }
               { dts.dep_terminal && <>Terminal: <b>{dts.dep_terminal}</b><br/></> }
               { dts.dep_gate && <>Gate: <b>{dts.dep_gate}</b><br/></> }
               { dts.dep_time_utc && <>Departure time: <b>{UTCtoIST(dts.dep_time_utc)}</b><br/></> }
               {/* { line 163 - 171 } */}

               {/* Airline */}
               { dts.airline_name && <>Airline: <b>{dts.airline_name} {AirlineFlag(dts.airline_iata)}</b><br/></> }
               { dts.airline_icao && <>Airline ICAO/IATA: <b>{dts.airline_icao}/{dts.airline_iata}</b><br/></> }
               { !dts.airline_name && <>{AirlineFlag(dts.airline_iata)}<br/></> }
               { dts.flight_icao && <>Flight ICAO/IATA: <b>{dts.flight_icao}/{dts.flight_iata}</b><br/></> }
               { dts.flight_number && <>Flight Number: <b>{dts.flight_number}</b><br/></> }
               { dts.reg_number && <>Registration: <b>{dts.reg_number}</b><br/></> }
               { dts.flag && <>Flag: <b>{CountryName(dts.flag)} {CountryFlag(dts.flag.toLowerCase())}</b><br/></> }
               { dts.lat && <>Position: <b>{dts.lat.toFixed(2)}, {dts.lng.toFixed(2)}</b><br/></> }
               { dts.alt && <>Altitude: <b>{(dts.alt*3.28).toFixed(0)} ft</b><br/></> }
               { dts.dir && <>Direction: <b>{dts.dir}°</b><br/></> }
               { dts.speed && <>Speed: <b>{dts.speed} Kmph</b><br/></> }
               { dts.v_speed && <>Speed: <b>{dts.v_speed} Kmph</b><br/></> }
               { dts.squawk && <>Squawk: <b>{dts.squawk}</b><br/></> }

               {/* Arrival */}
               { dts.arr_name && <>Arrival: <b>{dts.arr_name}, {dts.arr_city}, {CountryName(dts.arr_country)} {CountryFlag(dts.arr_country)}</b><br/></> }
               { dts.airline_icao && <>Arrival ICAO/IATA: <b>{dts.arr_icao}/{dts.arr_iata}</b><br/></> }
               { dts.arr_baggage && <>Baggage: <b>{dts.arr_baggage}</b><br/></> }
               { dts.arr_terminal && <>Terminal: <b>{dts.arr_terminal}</b><br/></> }
               { dts.arr_gate && <>Gate: <b>{dts.arr_gate}</b><br/></> }
               { dts.arr_time_utc && <>Arrival time: <b>{UTCtoIST(dts.arr_time_utc)}</b><br/></> }
               {/* Line 212 - 220 */}
               { dts.duration && <>Duration: <b>{Interval(dts.duration)}</b><br/></> }
               { dts.delay && <>Delay: <b>{Interval(dts.delay)}</b><br/></> }
               { dts.dep_delayed && <>Departure delay: <b>{Interval(dts.dep_delayed)}</b><br/></> }
               { dts.arr_delayed && <>Arrival delay: <b>{Interval(dts.arr_delayed)}</b><br/></> }

               {/* Manufacturer */}
               { dts.model && <>Airliner: <b>{dts.model} - ${dts.manufacturer}</b><br/></> }
               { dts.aircraft_icao && <>Aircraft ICAO: <b>{dts.aircraft_icao}</b><br/></> }
               { dts.engine && <>Engine: <b>{dts.engine_count} ${dts.engine}</b><br/></> }
               { dts.built && dts.age && <>Built: <b>{dts.built} - ${dts.age+2}y</b><br/></> }
               { dts.eta && dts.eta > -1 && <>Arriving in <b>{Interval(dts.eta)}</b><br/></> }
               { dts.status && <>Status: <b>{dts.status}</b><br/></> }
               { dts.updated && <>Updated: <b>{UTCtoIST(dts.updated)}</b><br/></> }
            </div>
         }
      </div>
   );
}
 
export default DataInformation;