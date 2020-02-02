import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarsListComponent } from './scholars-list/scholars-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { CenturyApiModule } from '../core/apis/century-api/century.api.module';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'list',
      component: ScholarsListComponent
  },
  {
      path: 'charts',
      component: ChartsComponent
  }
];

@NgModule({
  declarations: [ScholarsListComponent, HomeComponent, ChartsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule,
    CenturyApiModule
  ]
})
export class MainModule { }
