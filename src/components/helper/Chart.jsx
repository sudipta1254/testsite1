import React from 'react'

const Chart = () => {
   return (
      <div className="Chart">
         <input type="search" /> <button>Get graph</button> <br />
         <b>Loading..</b>
         <canvas id="myChart" style={{width:"100%",maxWidth:"600px",height:"300px"}}></canvas>
      </div>
   );
}
 
export default Chart;