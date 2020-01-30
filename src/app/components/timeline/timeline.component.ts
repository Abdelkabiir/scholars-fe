import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Century } from 'src/app/core/interfaces/century.interface';
import { CenturiesTitles } from 'src/app/core/constants/constants';
import { CenturyApi } from 'src/app/core/apis/century-api/century.api';

@Component({
  selector: 'isdb-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  centuriesData: Array<Century> = [];
  chartLabel = 'Scholars';
  dataSets: Array<number>;
  dataLabels: Array<string>;
  isReady = false;

  lineChartData;
  lineChartLabels;
  lineChartOptions;
  lineChartColors;
  lineChartLegend;
  lineChartPlugins;
  lineChartType;

  constructor(private centuryApi: CenturyApi) {
    console.log('timeline');
    this.getCentury();
  }

  ngOnInit() {

  }

  getTimelineChartData() {
    const dataSets = [];
    const dataLabels = [];
    this.centuriesData.forEach(century => {
        dataSets.push(century.count);
        dataLabels.push(CenturiesTitles[century.id]);
    });
    this.dataSets = dataSets;
    this.dataLabels = dataLabels;
  }

  getCentury() {
    this.centuryApi
    .getCenturies()
    .subscribe((data) => {
      this.centuriesData = data;
      this.sortCenturies(this.centuriesData);

      this.setUpCenturies(this.centuriesData);
      this.getTimelineChartData();
      this.setUpChart();
      this.isReady = true;
    });
  }

  setUpCenturies(data: Array<Century>) {
    data.forEach(century => {
      century.count = century.data.length;
    });
  }

  setUpChart() {
    this.lineChartData = [
      { data: this.dataSets, label: this.chartLabel },
    ];
    this.lineChartLabels = this.dataLabels;
    this.lineChartOptions = {
      responsive: true,
    };
    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: '#6b639c',
      },
    ];
    this.lineChartLegend = true;
    this.lineChartPlugins = [];
    this.lineChartType = 'line';
  }

  sortCenturies(centuries: Array<Century>) {
    centuries.sort((a: Century, b: Century) => {
      return a.id - b.id;
    });
  }
}
