import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() menus: any;
  @Output() deleteMenuEvent = new EventEmitter<string>();
  @Output() changeStateEvent = new EventEmitter<string>();
  @Output() updateFormEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeState(id: string) {
    this.changeStateEvent.emit(id);
  }

  updateForm(id: string) {
    this.updateFormEvent.emit(id);
  }

  deleteMenu(id: string) {
    this.deleteMenuEvent.emit(id);
  }

}
