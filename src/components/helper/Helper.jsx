import React from 'react'
import { Country } from '../../assets/env'

export const CountryName = (code) => {
   return code === "UK" ? code : Country[code]
}

export const CountryFlag = (flag) => {
   <img alt="Country flag" src={`https://flagcdn.com/24x18/${flag.toLowerCase()}.png`} />
}

export const AirlineFlag = (logo) => {
   return <div id="logo-div"><img alt="Airline flag" src={`https://airlabs.co/img/airline/m/${logo}.png`} id='logo' /></div>
}

export const UTCtoIST = (t) => {
   let vr = typeof t === 'string' ? new Date(t + 'Z') : new Date(t * 1000);
   return vr.toLocaleString().replace(':00', '');
}

export const Interval = (t) => {
   let day =  Math.floor(t/24/60),
      hour = Math.floor(t/60%24),
      min = Math.floor(t%60),
      str = '';
   if(day)
      str = day+' day(s), ';
   if(hour)
      str += hour+' hour(s), ';
   if(min)
      str += min+' min(s)';
   return str;
}