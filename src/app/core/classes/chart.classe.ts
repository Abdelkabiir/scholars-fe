export class ChartC {
    lineChartData;
    lineChartLabels;
    lineChartOptions;
    lineChartColors;
    lineChartLegend;
    lineChartPlugins;
    lineChartType;
    constructor(data) {
        this.lineChartData = [
            { data: data.dataSets, label: data.chartLabel },
        ];
        this.lineChartLabels = data.dataLabels;
        this.lineChartOptions = {
            responsive: true,
          };
        this.lineChartColors = [
            {
              borderColor: 'black',
              backgroundColor: 'lightseagreen',
            },
          ];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'bar';
    }
}
