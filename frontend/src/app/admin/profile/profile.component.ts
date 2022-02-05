import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/models/supervisor';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditBtnClick: boolean = false;

  profile = new Supervisor('', '', '', '', '', false, false);

  constructor(private profileService: ProfileService) {
    this.profileService.getAdminRequest(0).subscribe({
      next: (resp) => this.profile = resp,
      error: (err) => console.error(err)
    });

  }

  ngOnInit(): void { }

  editBtnClick() {
    this.isEditBtnClick = !this.isEditBtnClick;
  }

}
