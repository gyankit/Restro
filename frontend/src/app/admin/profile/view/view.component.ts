import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/vendor';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() profile: any;

  constructor() { }

  ngOnInit(): void { }

}
