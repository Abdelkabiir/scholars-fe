import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'isdb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scholarsListTitle = 'قائمة العلماء المسلمين';
  chartsTitle = 'مبيانات';
  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigateToScholarsList() {
    this.router.navigate(['list']);
    return;
  }

  navigateToCharts() {
    this.router.navigate(['charts']);
    return;
  }
}
