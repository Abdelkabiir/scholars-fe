import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Century } from 'src/app/core/interfaces/century.interface';

@Component({
  selector: 'isdb-scholar-dialog',
  templateUrl: './scholar-dialog.component.html',
  styleUrls: ['./scholar-dialog.component.scss']
})
export class ScholarDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ScholarDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Century) { }

  ngOnInit() {
  }

}
