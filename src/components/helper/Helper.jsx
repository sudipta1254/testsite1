import React from 'react'
import $ from "jquery"
import { Country } from '../../assets/env'

export const CountryName = (code) => {
   return Country[code]
}

export const CountryFlag = (flag) => {
   flag = flag === "UK" ? "gb" : flag;
   return <img alt="(Country flag)" src={`https://flagcdn.com/24x18/${flag?.toLowerCase()}.png`} />
}

export const AirlineFlag = (logo) => {
   return <div id="logo-div"><img alt="(Airline flag)" src={`https://airlabs.co/img/airline/m/${logo}.png`} id='logo' /></div>
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

export const SortFlight = (term, data) => {
   console.log('helper',term, data)
   if(term)
      if(term?.includes('_a'))
         data?.sort(function(a, b) {
            return a[term?.slice(0,-2)] - b[term?.slice(0,-2)];
         });
      else
         data?.sort(function(a, b) {
            return b[term?.slice(0,-2)] - a[term?.slice(0,-2)];
         });
}

export const handleEnter = (e) => {
   if (e.key === 'Enter') {
      e.preventDefault();
      $("button").trigger("click");
   }
}