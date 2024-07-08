import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import M from "materialize-css";

const OptionsRealtime = ({ inpRealtime, setInpRealtime }) => {
   const URLParams = {};
   const navigate = useNavigate()
   const [path, setPath] = useState("")
   const [selectVal1, setSelectVal1] = useState("airline")
   const [selectVal2, setSelectVal2] = useState("_iata")
   const [selectVal3, setSelectVal3] = useState("")
   
   useEffect(() => {
      setPath("/"+inpRealtime)
   }, [inpRealtime])
   const setParams = () => {
      if (selectVal1) URLParams.type = selectVal1;
      if (selectVal2) URLParams.code = selectVal2;
      if (selectVal3) URLParams.sort = selectVal3;
      
      return new URLSearchParams(URLParams).toString();
   }
   
   useEffect(() => { M.AutoInit() }, []);  /* Auto initialize materialize css */
   
   return (
      <div className="optionsRealtime option-tab options">
         <label>Select from:</label>
         <div className="option-options-1 ">
            <div className="">
               <select onChange={e => setSelectVal1(e.target.value)}>
                  <option value="airline">Airline</option>
                  <option value="arr">Arrival</option>
                  <option value="dep">Departure</option>
               </select>
            </div>
            <div className="">
               <select onChange={e => setSelectVal2(e.target.value)}>
                  <option value="_iata" className="left">IATA</option>
                  <option value="_icao" className="left">ICAO</option>
               </select>
            </div>
            <div className="">
               <select value={selectVal3} onChange={e => {
                                                      setSelectVal3(e.target.value);
                                                      URLParams.sort = e.target.value;
                                                      navigate(`${path}?${setParams()}`)
                                                   }}>
                  <option value="" disabled>--sort--</option>
                  <option value='flight_number_a'>Flight ↑</option>
                  <option value='flight_number_d'>Flight ↓</option>
               </select>
            </div>
         </div>
         <div className="option-options-2">
            <div className="">
               <label>
                  <input type="checkbox" />
                  <span>Auto update</span>
               </label>
            </div>
            <div className="input-field">
               <input placeholder="Enter query" id="inpRealtime" type="text" onChange={e => setInpRealtime(e.target.value?.toUpperCase())} />
            </div>
            <div className="input-field">
               <button className="btn-small teal lighten-1" onClick={e => navigate(`${path}?${setParams()}`)}>Go</button>
            </div>
         </div>
      </div>
   );
}
 
export default OptionsRealtime;
