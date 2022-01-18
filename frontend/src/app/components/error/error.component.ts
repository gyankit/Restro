import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() isError: boolean = false;
  @Input() error: any | undefined;

  @Output() boxCloseEvent = new EventEmitter<boolean>();

  errorCode: number = 0;
  errorMsg: string | undefined;
  errorKey: string | undefined;
  errorValue: string | undefined;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.errorCode = this.error?.code;
    this.errorMsg = this.error?.msg;
  }

  boxClose() {
    this.boxCloseEvent.emit(true);
  }

}
