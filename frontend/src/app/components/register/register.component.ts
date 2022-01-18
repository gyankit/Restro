import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  next: string = 'customer';
  urlIsCorrect: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['next'] !== undefined) {
        this.next = params['next'];
      }
      if (this.next === 'customer' || this.next === 'vendor' || this.next === 'supervisor') {
        this.urlIsCorrect = true;
      }
    });
  }

  ngOnInit(): void { }

}
