import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [TimelineComponent, PieChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [TimelineComponent,
    PieChartComponent]
})
export class ComponentsModule { }
