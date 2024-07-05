import React, { useEffect } from 'react';
import M from "materialize-css";
import { useNavigate } from 'react-router-dom';

const OptionsInformation = ({ inpInformation, setInpInformation }) => {
   const navigate = useNavigate()
   
   useEffect(() => { M.AutoInit() }, []);  /* Auto initialize materialize css */
   
   return (
      <div className="optionsInformation option-tab options">
         <label>Select from:</label>
         <div className="option-options-1 ">
            <div className="">
               <select>
                  <option value="_iata" className="left">Flight IATA</option>
                  <option value="_icao" className="left">Flight ICAO</option>
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
               <input placeholder="Enter query" id="inpInformation" type="text"  onChange={e => setInpInformation(e.target.value)}/>
            </div>
            <div className="input-field">
               <button className="btn-small teal lighten-1"  onClick={e => navigate('/info/' + inpInformation)}>Go</button>
            </div>
         </div>
      </div>
   );
}

export default OptionsInformation;
