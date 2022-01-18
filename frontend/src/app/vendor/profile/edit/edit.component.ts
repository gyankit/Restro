import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vendor } from 'src/app/models/vendor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() profile!: Vendor;
  @Output() profileUpdated = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onFormSubmit() {
    this.profileUpdated.emit();
  }

}
