import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Supervisor } from 'src/app/models/supervisor';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  @Input() next!: string;
  isError: boolean = false;
  error: any = null;
  submitted: boolean = false;
  profile = new Supervisor('', '', '', '', '', false, true);
  file!: File;

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.pattern('[1-9][0-9]{9}')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    photo: new FormControl('', Validators.required),
  });

  get rf() { return this.registerForm.controls; }

  constructor(private authService: AuthService, private router: Router, private register: RegisterService, private fileService: FileService) {
    if (this.authService.isLoggedIn(this.next)) {
      this.router.navigate([this.next]);
    }
  }

  ngOnInit(): void { }

  onSubmit(form: FormGroup) {
    this.submitted = true;

    this.profile.name = form.controls['name'].value;
    this.profile.mobile = form.controls['mobile'].value;
    this.profile.email = form.controls['email'].value;
    this.profile.password = form.controls['password'].value;

    this.addAccount(this.profile);
  }

  fileOnChange(event: any) {
    this.file = event.target.files[0];
  }

  addAccount(newProfile: Supervisor) {
    this.register.addAccount(newProfile, this.next).subscribe({
      next: (data: boolean) => {
        this.submitted = false;
        this.fileService.upload([this.file], data, this.next).subscribe(data => this.router.navigate(["login", this.next]));
      },
      error: (error) => {
        this.submitted = false;
        this.isError = true;
        this.error = error;
      }
    })
  }

  boxClose() {
    this.isError = false;
  }

}
