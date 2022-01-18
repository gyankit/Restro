import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { SessionService } from 'src/app/service/session.service';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAddBtnClick: boolean = true;

  menu: Menu[] = [];

  constructor(private menuService: MenuService, private session: SessionService) {
    this.menuService.getRequest(false, { 'vid': this.session.uid }).subscribe({
      next: (resp: Menu[]) => this.menu = resp,
      error: (err: any) => console.error(err)
    });
  }

  ngOnInit(): void { }

  addBtnClick() {
    this.isAddBtnClick = !this.isAddBtnClick;
  }

  newMenuAdded(newMenu: any) {
    this.isAddBtnClick = !this.isAddBtnClick;
    this.menu.push(newMenu);
  }

}
