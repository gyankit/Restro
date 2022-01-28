import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() error: any | undefined;

  @Output() boxCloseEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  boxClose() {
    this.boxCloseEvent.emit();
  }

}
