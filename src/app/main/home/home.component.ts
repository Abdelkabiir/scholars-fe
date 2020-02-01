import { Component, OnInit } from '@angular/core';
import { Century } from 'src/app/core/interfaces/century.interface';
import { CenturyApi } from 'src/app/core/apis/century-api/century.api';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ScholarDialogComponent } from 'src/app/components/scholar-dialog/scholar-dialog.component';

@Component({
  selector: 'isdb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  centuriesData: Century[];
  centuriesTiles: string[] = [];

  constructor(private centuryApi: CenturyApi, public dialog: MatDialog) {
    console.log('home');
  }

  ngOnInit() {
    this.centuryApi
    .getCenturies()
    .subscribe(data => {
      this.centuriesData = data;
      this.getTitles(this.centuriesData);
    });
  }

  getTitles(centuries: Century[]) {
    console.log(centuries);
    centuries.forEach(century => {
      this.centuriesTiles.push(century.title);
    });
  }

  openDialog(index) {
    const dialogRef = this.dialog.open(ScholarDialogComponent, {
      width: '700px',
      height: '600px',
      data: this.centuriesData[index]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
