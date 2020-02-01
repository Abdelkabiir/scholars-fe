import { Component, OnInit, ElementRef } from '@angular/core';
import { CenturyApi } from 'src/app/core/apis/century-api/century.api';
import { Century } from 'src/app/core/interfaces/century.interface';
import { ChartC } from 'src/app/core/classes/chart.classe';

@Component({
  selector: 'isdb-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chartLabel = 'Number of Scholars';
  chart: ChartC;
  centuriesData: Century[];
  isReady = false;

  constructor(private centuryApi: CenturyApi, private elementRef: ElementRef) { }

  ngOnInit() {
    this.centuryApi
      .getCenturies()
      .subscribe(data => {
        this.centuriesData = data;
        this.setUpCenturies(this.centuriesData);
        this.prepareChartData(this.centuriesData);
        this.isReady = true;
      });
  }
  setUpCenturies(data: Array<Century>) {
    data.forEach(century => {
      century.count = century.scholars.length;
    });
  }

  prepareChartData(dataSource: Century[]) {
    const chartData = this.getTimelineChartData(dataSource);
    this.chart = new ChartC({
      dataSets: chartData.dataSets,
      chartLabel: this.chartLabel,
      dataLabels: chartData.dataLabels,
    });
  }

  getTimelineChartData(data: Century[]) {
    const dataSets = [];
    const dataLabels = [];
    data.forEach(century => {
        dataSets.push(century.count);
        dataLabels.push(century.title);
    });

    return {
      dataSets,
      dataLabels
    };
  }

}
