import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import M from "materialize-css";

const OptionsRealtime = ({ inpRealtime, setInpRealtime }) => {
   const navigate = useNavigate()
   // const [selectVal1, setSelectVal1] = useState("")
   // const [selectVal2, setSelectVal2] = useState("")
   const [selectVal3, setSelectVal3] = useState("")
   const [ab, setAb] = useState("flight_number_a")
   
   useEffect(() => { M.AutoInit() }, []);  /* Auto initialize materialize css */
   
   return (
      <div className="optionsRealtime option-tab options">
         <label>Select from:</label>
         <div className="option-options-1 ">
            <div className="">
               <select>
                  <option value="airline">Airline</option>
                  <option value="arr">Arrival</option>
                  <option value="dep">Departure</option>
                  <option value="reg_number">Registration</option>
               </select>
            </div>
            <div className="">
               <select>
                  <option value="_iata" className="left">IATA</option>
                  <option value="_icao" className="left">ICAO</option>
               </select>
            </div>
            <div className="">
               <select value={selectVal3} onChange={e => {
                                             console.log('sort', e.target.value)
                                             setSelectVal3(e.target.value)
                                             setAb(e.target.value)
                                             navigate(`/${inpRealtime}?sort=${e.target.value}`)
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
               <button className="btn-small teal lighten-1" onClick={e => navigate('/'+inpRealtime)}>Go</button>
            </div>
         </div>
      </div>
   );
}
 
export default OptionsRealtime;
