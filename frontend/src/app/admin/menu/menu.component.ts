import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { SessionService } from 'src/app/service/session.service';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAddBtnClick: boolean = false;
  isEditBtnClick: boolean = false;
  id: any = false;
  menus: Menu[] = [];

  constructor(private menuService: MenuService, private session: SessionService) {
    this.getMenu();
  }

  ngOnInit(): void { }

  getMenu() {
    this.menuService.getRequest(false, null).subscribe({
      next: (resp: Menu[]) => this.menus = resp,
      error: (err: any) => console.error(err)
    });
  }

  addBtnClick() {
    this.isAddBtnClick = !this.isAddBtnClick;
    this.isEditBtnClick = false;
    this.id = false;
  }

  newMenuAdded(newMenu: any) {
    this.isAddBtnClick = !this.isAddBtnClick;
    this.menus.push(newMenu);
  }

  changeState(id: string) {
    this.menuService.stateRequest(id).subscribe({
      next: () => this.getMenu(),
      error: (err: any) => console.error(err)
    })
  }

  updateForm(id: string) {
    this.isEditBtnClick = !this.isEditBtnClick;
    this.id = id;
  }

  deleteMenu(id: string) {
    this.menuService.deleteRequest(id).subscribe({
      next: () => this.getMenu(),
      error: (err: any) => console.error(err)
    })
  }

  viewEvent() {
    this.isEditBtnClick = !this.isEditBtnClick;
    this.getMenu();
  }

}
