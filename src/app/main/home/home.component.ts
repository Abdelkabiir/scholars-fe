import { Component, OnInit } from '@angular/core';
import { Century } from 'src/app/core/interfaces/century.interface';

@Component({
  selector: 'isdb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {
    console.log('home');
  }

  ngOnInit() {
  }


}
