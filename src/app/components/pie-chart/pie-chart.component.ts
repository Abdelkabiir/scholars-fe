import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'isdb-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  doughnutChartLabels: Label[] = ['1st century', '2nd century', '3rd century', '4th century'];
  doughnutChartData: MultiDataSet = [
    [85, 7, 16, 44]
  ];
  doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
