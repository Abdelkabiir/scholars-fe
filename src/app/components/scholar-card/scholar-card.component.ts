import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'isdb-scholar-card',
  templateUrl: './scholar-card.component.html',
  styleUrls: ['./scholar-card.component.scss']
})
export class ScholarCardComponent implements OnInit {
  @Input() title = '';
  constructor() { }

  ngOnInit() {
  }

}
