import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: Order[] = []
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private orderService: OrderService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  removeFromCart(id: any) {
    this.orderService.deleteRequest(id).subscribe({
      next: (data) => this.getData(),
      error: (error) => console.error(error)
    });
  }

  getData() {
    this.totalPrice = 0;
    this.totalQuantity = 0;
    this.orders = [];
    this.orderService.getRequest(true).subscribe({
      next: (resp) => {
        this.orders = resp;
        this.orders.forEach(order => {
          this.totalQuantity += order.quantity;
          this.totalPrice += order.price;
        })
      },
      error: (error) => console.error(error)
    });
  }

}
