import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  

  Highcharts: typeof Highcharts = Highcharts; // required
 chartOptions = {
  chart: {
    type: 'packedbubble',
  },
  tooltip: {
    useHTML: true,
    pointFormat: '<b>{point.name}</b>'
  },
  plotOptions: {
    packedbubble: {
        minSize: '20%',
        maxSize: '100%',
        zMin: 0,
        zMax: 1000,
        layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: true,
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}',
            style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal'
            }
        }
    }
  },
  
series: [{
    data: [{

        name: 'PTO',
        value:  60 
    }, {

        name: 'ODRS',

        value: 104

    }, {

        name: "Explore Plan",

        value: 263

    }, {

        name: " FDPlan",

        value: 123

    }, {

        name: "GAIA",

        value: 104

    }, {

        name: "ProdOps",

        value: 263

    }, {

        name: "DrillPlan",

        value: 123

    
    }]     
}],
 
}; // required
  

   constructor() { }

  ngOnInit(): void {
   
   
  }

 

}
