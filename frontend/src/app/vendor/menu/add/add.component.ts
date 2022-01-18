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

  menu = new Menu(0, 0, '', 0, 0, false, false);
  @Output() menuAdded = new EventEmitter();

  constructor(private session: SessionService, private menuService: MenuService) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.menu.mid = Date.now();
    this.menu.vid = parseInt(this.session.uid);
    this.addMenu(this.menu);
  }

  addMenu(newMenu: Menu) {
    this.menuService.postRequest(newMenu).subscribe({
      next: (data: Menu) => this.menuAdded.emit(data),
      error: (error) => console.error(error)
    })
  }

}
