import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  next: string = 'customer';
  isError: boolean = false;
  error: any = null;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['next'] !== undefined) {
        this.next = params['next'];
      }
    });
  }

  onSubmit(form: FormGroup) {
    this.authService.login(form.value, this.next).subscribe(
      data => {
        if (!data) {
          this.setError();
        } else {
          this.authService.setLoggedIn(true, data, this.next);
          this.router.navigate([this.next]);
        }
      },
      error => this.setError()
    );
  }

  setError() {
    this.isError = true;
    this.error = {
      code: 400,
      msg: 'UserId / Email or Password is not matching!'
    };
  }

  boxClose() {
    this.isError = false;
  }

}
