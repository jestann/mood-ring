 import React, {components} from 'react';
 import {Bar, Line, Pie} from 'react-chartjs-2';

class chart extends components{
 constructor(){
  this.state = {
   ChartData:{
    Labels:{"5 seconds ago", "4 seconds ago", "3 seconds ago", "2 seconds ago", "Just now"}   }
  }
 super(props);
 render(){
  return(
   <div className= "chart">
   <Line
          data={this.temperature.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Heart rate '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

   </div>
   )}}
 
 
