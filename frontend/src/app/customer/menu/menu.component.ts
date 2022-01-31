import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menu!: Menu;
  isAddedToCart: boolean = false;
  loggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.loggedIn = this.authService.loggedIn;
  }

  ngOnInit(): void { }

  addToCart() {
    this.isAddedToCart = !this.isAddedToCart;
  }

}
