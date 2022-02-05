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

  id: any = false;
  menus: Menu[] = [];

  constructor(private menuService: MenuService) {
    this.menuService.getRequest(false, null).subscribe({
      next: (resp: Menu[]) => this.menus = resp,
      error: (err: any) => console.error(err)
    })

  }

  ngOnInit(): void { }

  changeState(id: any, idx: any) {
    this.menuService.stateRequest(id).subscribe({
      next: (data) => this.menus[idx] = data,
      error: (err: any) => console.error(err)
    })
  }

}
