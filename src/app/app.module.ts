import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from './components/components.module';
import { GlobalModule } from './global/global.module';
import { CenturyApiModule } from './core/apis/century-api/century.api.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    GlobalModule,
    ComponentsModule,
    CenturyApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
