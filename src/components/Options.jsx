import React, { useEffect } from 'react';
import M from "materialize-css";

const Options = () => {
   useEffect(() => { M.AutoInit() }, []);

   return (
      <div className="option-tab">
         <label>Select from:</label>
         <div className="option-options-1 row center">
            <div class="input-field col s12 m4">
               <select>
                  <option value="">Airline</option>
                  <option value="">Arrival</option>
                  <option value="">Departure</option>
                  <option value="">Registration</option>
               </select>
            </div>
            <div class="input-field col s12 m4">
               <select>
                  <option value="" class="left">IATA</option>
                  <option value="" class="left">ICAO</option>
               </select>
            </div>
            <div class="input-field col s12 m4">
               <select>
                  <option value="" disabled selected>--sort--</option>
                  <option value="" class="left">Flight </option>
                  <option value="" class="left">Flight</option>
               </select>
            </div>
         </div>
         <div className="option-options-2 row center">
            <div className="input-field col s12 m4">
               <label>
                  <input type="checkbox" />
                  <span>Auto update</span>
               </label>
            </div>
            <div class="input-field col s12 m4">
               <input placeholder="Enter query" id="first_name" type="text"/>
            </div>
            <div class="input-field col s12 m4">
               <button class="waves-effect waves-light btn-small">Go</button>
            </div>
         </div>
      </div>
   );
}
 
export default Options;