import React from 'react'
import { Line } from 'react-chartjs-2'
import './../css/main.css'

const Chart = (props) => {
  let data = {
    labels: ['', '', '', '', '', '', '', '', '', ''],
    datasets: [{
       label: "Heart Rate",
       fill: true,
       lineTension: 0.1,
       backgroundColor: 'rgba(75,192,192,0.4)',
       borderColor: 'rgba(75,192,192,1)',
       borderCapStyle: 'butt',
       borderDash: [],
       borderDashOffset: 0.0,
       borderJoinStyle: 'miter',
       pointBorderColor: 'rgba(75,192,192,1)',
       pointBackgroundColor: '#fff',
       pointBorderWidth: 1,
       pointHoverRadius: 5,
       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
       pointHoverBorderColor: 'rgba(220,220,220,1)',
       pointHoverBorderWidth: 2,
       pointRadius: 1,
       pointHitRadius: 10,
       data: props.temps.slice(props.temps.length-10, props.temps.length)
    }]
  }
     
  return (
     <div className="box">
      <Line data={data} />
     </div>
   )
}

export default Chart
 
 
