import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-part',
  templateUrl: './widget-part.component.html',
  styleUrls: ['./widget-part.component.css']
})
export class WidgetPartComponent implements OnInit {

  @Input() row: boolean;
  constructor() { }

  ngOnInit() {
  }

}
