import React, { useEffect } from 'react'
import M from "materialize-css"

const Chart = () => {
   useEffect(() => { M.AutoInit() }, []);  /* Auto initialize materialize css */
   
   return (
      <div className="Chart">
         <input type="search" /> <button>Get graph</button> <br />
         <b>Loading..</b>
         <canvas id="myChart" style={{width:"100%",maxWidth:"600px",height:"300px"}}></canvas>
      </div>
   );
}
 
export default Chart;