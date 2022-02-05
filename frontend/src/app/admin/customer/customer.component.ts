import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private profileService: ProfileService) {
    this.profileService.getAdminRequest(2).subscribe({
      next: (resp: Customer[]) => this.customers = resp,
      error: (err: any) => console.error(err)
    });
  }

  ngOnInit(): void { }

  changeState(id: any, state: boolean, idx: number) {
    this.profileService.stateRequest(2, id, !state).subscribe({
      next: (data) => this.customers[idx] = data,
      error: (err: any) => console.error(err)
    })
  }

}
