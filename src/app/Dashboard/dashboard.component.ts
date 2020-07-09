import { Component, OnInit } from '@angular/core';
import{Chart} from 'chart.js'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chart=[];
  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Out','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            data: [0,7,4,5,3,9,8,8.5,12,7,5,3],
            borderColor: 'red',
            fill: true,
            lineTension: 0.01,

          },
          {
            data: [4,3,4,15,3,9,5,8.5,2,7,1,10],
            borderColor: 'blue',
            fill: true,
            lineTension: 0.01,

          },


        ],

      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
            display: false
            }
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    })
  }

}
