import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) {
    this.orderService.getVendorRequest(true).subscribe({
      next: (resp: Order[]) => this.orders = resp,
      error: (err: any) => console.error(err)
    });
  }

  ngOnInit(): void { }

  updateStatus(id: any, status: number, idx: number) {
    this.orderService.updateRequest(id, status).subscribe(data => this.orders[idx] = data);
  }

}
