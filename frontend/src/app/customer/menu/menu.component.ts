import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Menu } from 'src/app/models/menu';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/service/order.service';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menu!: Menu;
  isAddedToCart: boolean = false;
  loggedIn: boolean = false;
  order!: Order;
  oid!: string;
  profile = new Customer('', { address1: '', address2: null, district: '', state: '', pin: '' }, '', '', '', '', false, false);

  constructor(private orderService: OrderService, private profileService: ProfileService) {
    this.profileService.getCustomerRequest().subscribe({
      next: (resp) => {
        this.profile = resp
        this.loggedIn = true;
      },
      error: (err) => {
        console.error(err);
        this.loggedIn = false;
      }
    });
  }

  ngOnInit(): void { }

  addToCart() {
    const id = this.menu._id === undefined ? '' : this.menu._id;
    const uid = this.profile._id === undefined ? '' : this.profile._id;

    this.order = new Order(id, uid, this.menu.vid, this.menu.name, this.menu.quantity, this.menu.price, 0, this.profile.address, this.menu.photo, false, 0)

    this.orderService.createRequest(this.order).subscribe({
      next: (data) => {
        this.oid = data._id;
        this.isAddedToCart = !this.isAddedToCart
      },
      error: (error) => console.error(error)
    });
  }

  removeFromCart() {
    this.orderService.deleteRequest(this.oid).subscribe({
      next: (data) => {
        this.oid = '';
        this.isAddedToCart = !this.isAddedToCart
      },
      error: (error) => console.error(error)
    });
  }

}
