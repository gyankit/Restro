import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/vendor';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendors: Vendor[] = [];

  constructor(private profileService: ProfileService) {
    this.profileService.getAdminRequest(1).subscribe({
      next: (resp: Vendor[]) => this.vendors = resp,
      error: (err: any) => console.error(err)
    });
  }

  ngOnInit(): void { }

  changeState(id: any, state: boolean, idx: number) {
    this.profileService.stateRequest(1, id, !state).subscribe({
      next: (data) => this.vendors[idx] = data,
      error: (err: any) => console.error(err)
    })
  }


}
