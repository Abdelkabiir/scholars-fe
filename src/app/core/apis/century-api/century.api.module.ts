import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenturyApi } from './century.api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CenturyApi
  ]
})
export class CenturyApiModule { }
