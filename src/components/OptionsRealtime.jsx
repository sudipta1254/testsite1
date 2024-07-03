import React, { useState, useEffect } from 'react';
import M from "materialize-css";

const OptionsRealtime = () => {
   const [selectVal3, setSelectVal3] = useState("")

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
               <select value={selectVal3} onChange={e => setSelectVal3(e.target.value)}>
                  <option value="" disabled>--sort--</option>
                  <option value='flight_number_a'>Flight ↑</option>
                  <option value='flight_number_d'>Flight ↓</option>
                  <option value='alt_a'>Altitude ↑</option>
                  <option value='alt_d'>Altitude ↓</option>
                  <option value='speed_a'>Speed ↑</option>
                  <option value='speed_d'>Speed ↓</option>
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
               <input placeholder="Enter query" id="first_name" type="search"/>
            </div>
            <div className="input-field">
               <button className="btn-small teal lighten-1">Go</button>
            </div>
         </div>
      </div>
   );
}
 
export default OptionsRealtime;