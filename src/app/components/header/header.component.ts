import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'isdb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  constructor() { }

  ngOnInit() {
  }

}
