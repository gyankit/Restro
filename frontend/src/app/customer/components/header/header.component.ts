import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.loggedIn = this.authService.loggedIn && this.authService.isLoggedIn('2');
  }

  ngOnInit(): void { }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

}
