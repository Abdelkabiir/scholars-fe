import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { ScholarCardComponent } from './scholar-card/scholar-card.component';
import { ScholarDialogComponent } from './scholar-dialog/scholar-dialog.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [ChartComponent, HeaderComponent, ScholarCardComponent, MenuComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [ChartComponent, HeaderComponent, ScholarCardComponent, MenuComponent]
})
export class ComponentsModule { }
