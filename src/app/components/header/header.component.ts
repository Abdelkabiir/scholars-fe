import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isdb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'قائمة العلماء المسلمين'
  constructor() { }

  ngOnInit() {
  }

}
