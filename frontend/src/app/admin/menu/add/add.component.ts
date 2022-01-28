import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { SessionService } from 'src/app/service/session.service';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  isError: boolean = false;
  error: any = null;
  menu = new Menu('', '', '', 0, 0, '', false, false, false);
  @Output() menuAdded = new EventEmitter();

  constructor(private session: SessionService, private menuService: MenuService) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.menu.vid = this.session.uid;
    this.menuService.postRequest(this.menu).subscribe({
      next: (data: Menu) => this.menuAdded.emit(data),
      error: (error) => {
        this.isError = true;
        this.error = error;
      }
    })
  }

  boxClose() {
    this.isError = false;
  }

}
