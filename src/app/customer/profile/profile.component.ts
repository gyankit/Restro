import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditBtnClick: boolean = false;

  profile = new Customer('', { address1: '', address2: null, district: '', state: '', pin: '' }, '', '', '', '', false, false);

  constructor(private profileService: ProfileService) {
    this.profileService.getCustomerRequest().subscribe({
      next: (resp) => this.profile = resp,
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void { }

  editBtnClick() {
    this.isEditBtnClick = !this.isEditBtnClick;
  }

}
