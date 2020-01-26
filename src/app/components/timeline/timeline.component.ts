import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'isdb-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    { data: [85, 7, 16, 44], label: 'Scholars' },
  ];
  lineChartLabels: Label[] = ['1st century', '2nd century', '3rd century', '4th century'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#6b639c',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor() { }

  ngOnInit() {
  }
}
