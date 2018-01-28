 import React, {components} from 'react';
 import {Bar, Line, Pie} from 'react-chartjs-2';
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
