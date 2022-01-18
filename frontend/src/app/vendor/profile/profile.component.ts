import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/vendor';
import { SessionService } from 'src/app/service/session.service';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditBtnClick: boolean = false;

  profile = new Vendor(0, '', '', { address1: '', address2: null, district: '', state: '', pin: '' }, '', '', '', '', 0, false, false);

  constructor(private profileService: ProfileService, private session: SessionService) {
    this.profileService.postRequest({ 'vid': this.session.uid }).subscribe({
      next: (resp) => this.profile = resp[0],
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void { }

  editBtnClick() {
    this.isEditBtnClick = !this.isEditBtnClick;
  }

}
