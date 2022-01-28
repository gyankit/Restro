import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  next: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    const path = this.route.snapshot.paramMap.get('next');
    if (path === null) {
      this.next = 'customer';
    } else if (path === 'admin') {
      this.next = 'admin';
    } else if (path === 'vendor') {
      this.next = 'vendor';
    } else {
      this.router.navigate(["register"]);
    }
  }

  ngOnInit(): void { }

}
