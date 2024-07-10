import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import M from "materialize-css";
import { handleEnter } from '../helper/Helper';

const OptionsInformation = ({ inpInformation, setInpInformation }) => {
   const URLParams = {};
   const navigate = useNavigate()
   const [path, setPath] = useState("")
   const [selectVal, setSelectVal] = useState("_iata")
   
   useEffect(() => {
      setPath("/info/"+inpInformation)
   }, [inpInformation])
   const setParams = () => {
      if (selectVal) URLParams.code = selectVal;
      
      return new URLSearchParams(URLParams).toString();
   }
   
   useEffect(() => { M.AutoInit() }, []);  /* Auto initialize materialize css */
   
   return (
      <div className="optionsInformation option-tab options">
         <label>Select from:</label>
         <div className="option-options-1 ">
            <div className="">
               <select onChange={e => setSelectVal(e.target.value)}>
                  <option value="_iata" className="left">Flight IATA</option>
                  <option value="_icao" className="left">Flight ICAO</option>
               </select>
            </div>
            <div className="">
               <label>
                  <input type="checkbox" disabled />
                  <span>Auto update</span>
               </label>
            </div>
         </div>
         <div className="option-options-2">
            <div className="input-field">
               <input placeholder="Enter query" id="inpInformation" type="text"
                  onKeyDown={handleEnter}
                  onChange={e => setInpInformation(e.target.value?.toUpperCase())}
               />
            </div>
            <div className="input-field">
               <div className="btn-enter btn-small teal lighten-1"  onClick={e => navigate(`${path}?${setParams()}`)}>Go
                  <i className="material-icons right">search</i>
               </div>
            </div>
         </div>
      </div>
   );
}

export default OptionsInformation;
