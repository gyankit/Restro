import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Supervisor } from 'src/app/models/supervisor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() profile!: Supervisor;
  @Output() profileUpdated = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onFormSubmit() {
    this.profileUpdated.emit();
  }

}
