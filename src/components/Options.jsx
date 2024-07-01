import React, { useEffect } from 'react';
import M from "materialize-css";

const Options = () => {
   useEffect(() => {
      M.AutoInit()
    }, []);

   return (
      <div className="option-tab row">
         {/* <label>Select from:</label> */}
         {/* <div className="option-options col 12">
            <div className="input-field row s6">
               <input type="text" />
            </div>
            <div className="input-field row s6">
               <input type="text" />
            </div>
         </div> */}

         <div class="input-field col s12 m6">
            <select>
               <option value="" disabled selected>Choose your option</option>
               <option value="">example 1</option>
               <option value="">example 2</option>
               <option value="">example 3</option>
            </select>
            <label>Images in select</label>
         </div>
         <div class="input-field col s12 m6">
            <select>
               <option value="" disabled selected>Choose your option</option>
               <option value="" class="left">example 1</option>
               <option value="" class="left">example 2</option>
               <option value="" class="left">example 3</option>
            </select>
            <label>Images in select</label>
         </div>
      </div>
   );
}
 
export default Options;