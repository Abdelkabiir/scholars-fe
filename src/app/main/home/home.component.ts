import { Component, OnInit } from '@angular/core';
import { CenturyApi } from 'src/app/core/apis/century-api/century.api';

@Component({
  selector: 'isdb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  res: any;
  name: string;

  constructor(private centuryApi: CenturyApi) {
    // this.res = this.centuryApi.getCentury(1);
  }

  ngOnInit() {
    this.getCentury();
  }

  getCentury() {
    this.centuryApi
    .getCenturies()
    .subscribe((data) => {
      console.log(data);
      this.res = data;
    });
  }


}
