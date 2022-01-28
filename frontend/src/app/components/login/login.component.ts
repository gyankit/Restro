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

  next: string = '';
  isError: boolean = false;
  error: any = null;
  urlIsCorrect: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    const path = this.route.snapshot.paramMap.get('next');
    if (path === null) {
      this.next = 'customer';
      this.redirect('1', this.next);
    } else if (path === 'admin') {
      this.next = 'admin';
      this.redirect('0', this.next);
    } else if (path === 'vendor') {
      this.next = 'vendor';
      this.redirect('2', this.next);
    } else {
      this.router.navigate(["login"]);
    }
  }

  ngOnInit(): void { }

  onSubmit(form: FormGroup) {
    this.authService.login(form.value, this.next).subscribe({
      next: (data: any) => {
        this.authService.setLoggedIn(true, data);
        const path = this.next === 'customer' ? '/' : this.next;
        this.router.navigate(['/', path]);
      },
      error: (error) => {
        this.isError = true;
        this.error = error;
      }
    });

  }

  boxClose() {
    this.isError = false;
  }

  redirect(type: string, path: string) {
    if (this.authService.loggedIn && (this.authService.type === type)) {
      if (path === 'customer')
        this.router.navigate(['/']);
      else
        this.router.navigate([path]);
    }
  }
}
