import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  row = false;
  column = true;
  constructor() { }

  switchLayoutToRow(): void {
    this.column = false;
    this.row = true;
  }

  switchLayoutToColumn(): void {
    this.column = true;
    this.row = false;
  }

}
