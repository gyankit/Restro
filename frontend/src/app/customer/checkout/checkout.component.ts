import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/service/order.service';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orders: Order[] = [];
  user!: Customer[];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private orderService: OrderService, private profileService: ProfileService, private router: Router) {
    this.profileService.getCustomerRequest().subscribe(data => this.user = data);
    this.orderService.getCustomerRequest(true).subscribe({
      next: (resp) => {
        this.orders = resp;
        this.orders.forEach(order => {
          this.totalQuantity += order.quantity;
          this.totalPrice += order.price;
        });
      },
      error: (error) => console.error(error)
    })
  }

  ngOnInit(): void { }

  orderPlace() {
    this.orders.forEach(order => {
      this.orderService.updateRequest(order._id, 1).subscribe(data => console.log("Order Placed"));
    });
    this.router.navigate(['/order']);
  }

}
