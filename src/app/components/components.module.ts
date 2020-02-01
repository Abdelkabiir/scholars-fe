import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { ScholarCardComponent } from './scholar-card/scholar-card.component';
import { ScholarDialogComponent } from './scholar-dialog/scholar-dialog.component';

@NgModule({
  declarations: [ChartComponent, HeaderComponent, ScholarCardComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [ChartComponent, HeaderComponent, ScholarCardComponent]
})
export class ComponentsModule { }
