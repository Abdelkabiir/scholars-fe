import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'isdb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['']);
    return;
  }
}
