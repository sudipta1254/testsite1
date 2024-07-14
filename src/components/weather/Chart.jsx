import React from 'react'
import "../../index.css"
import $ from "jquery"
import Chart from "chart.js/auto"

const ChartComp = () => {
   function init() {
      const dy = new Date()
      const currDay = dy.toISOString().split("T")[0]
      dy.setDate(dy.getDate()-1)
      const prevDay = dy.toISOString().split("T")[0]
      // let inp = $('input').val().trim()
      let inp = "ixw"
      if (!inp) {
         alert('Enter location to continue!')
         return
      }
      const yV1 = [], yV2 = [],
      api = `https://api.weatherapi.com/v1/forecast.json?q=${inp}&key=${process.env.REACT_APP_WEATHER_KEY}&dt=`
   
      $('b').show()
      fetch(api + prevDay)
      .then(res => res.json())
      .then(data => {
         const hour = data.forecast.forecastday[0].hour
         hour.map(h => ( h.temp_c = Math.round(h.temp_c) ))
         hour.map(h => yV2.push(h.temp_c))
         fetch2(api, currDay, yV1, yV2)
      })
   }
   function fetch2(api, cDay, yV1, yV2) {
      fetch(api + cDay)
      .then(res => res.json())
      .then(data => {
         const hour = data.forecast.forecastday[0].hour
         hour.map(h => ( h.temp_c = Math.round(h.temp_c) ))
         for(let h of hour) {
            const a = new Date(data.current.last_updated_epoch),
            b = new Date(h.time_epoch)
            if ((a - b) < 0)
               break
            yV1.push(h.temp_c)
         }
         init2(data.location, yV1, yV2)
      })
      .catch(alert)
   }
   function init2(loc, yV1, yV2) {
      const xV = [...Array(24).keys()];
      let tr = [...yV1, ...yV2].sort((a, b) => a - b),
      min = Math.floor(tr[0]-1), max = Math.ceil(tr[tr.length-1]+1)
      
      // const myChart = 
      new Chart("myChart", {
         type: "line",
         data: {
            labels: xV,
            datasets: [{
               label: "Today",
               fill: false,
               lineTension: 0,
               backgroundColor: "teal",
               pointStyle: "rect",
               borderColor: "rgb(75, 192, 192)",
               data: yV1
            },{
               label: "Yesterday",
               pointStyle: "rectRot",
               fill: false,
               lineTension: 0,
               backgroundColor: "grey",
               data: yV2
            }]
         },
         options: {
            legend: {display: true},
            scales: {
               xAxes: [{
                  scaleLabel: {
                     display: true,
                     labelString: 'Hours'
                  },
               }],
               yAxes: [{
                  scaleLabel: {
                     display: true,
                     labelString: 'Temperature(°C)'
                  },
                  ticks: { min, max }
               }]
            },
            title: {
               display: true,
               text: `Weather trend for ${loc.name}, ${loc.region}, ${loc.country}`,
               fontSize: 16
            },
            tooltips: {
               enabled: true,
               mode: 'index',
               intersect: false,
               callbacks: {
                  label: function(tooltipItem, data) {
                     const datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                     const yValue = tooltipItem.yLabel;
                     return datasetLabel + ': ' + yValue;
                  }
               }
            }
         }
      })
      $('b').hide()
   }
   
   $('button').click(init())
   $('input').on("keypress", function(e) {
      console.log(e)
      if (e.key === "Enter") {
         $(this).blur()
         init()
      }
   })

   return (
      <div className="Chart container">
         <input type="search" /> <button type="button">Get graph</button> <br />
         <b style={{display:"none"}}>Loading..</b>
         <canvas id="myChart" style={{width:"100%",maxWidth:"600px",height:"300px"}}></canvas>
      </div>
   );
}

export default ChartComp;