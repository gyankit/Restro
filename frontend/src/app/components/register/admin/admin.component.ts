import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Supervisor } from 'src/app/models/supervisor';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() next!: string;
  isError: boolean = false;
  error: any = null;
  submitted: boolean = false;
  profile = new Supervisor(0, '', '', '', '', false, true);
  login = new Login('', '', 0, false, 1);
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
    this.profile.sid = Date.now();

    this.login.password = form.controls['password'].value;
    this.login.email = form.controls['email'].value;
    this.login.lid = this.profile.sid;

    this.profile.photo = this.login.lid + '.' + this.file.type.split('/')[1];
    this.addAccount(this.profile, this.login);
  }

  fileOnChange(event: any) {
    this.file = event.target.files[0];
  }

  addAccount(newProfile: Supervisor, newLogin: Login) {
    this.register.addAccount(newProfile, newLogin, this.next).subscribe({
      next: (data: boolean) => {
        this.submitted = false;
        if (data) {
          this.fileService.uploadOne(this.file, newLogin.lid, this.next).subscribe(data => console.log(data));
          this.router.navigate(["login"], { queryParams: { next: this.next } });
        } else {
          this.setError();
        }
      },
      error: (error) => {
        this.submitted = false;
        let errorKey, errorValue;
        for (var key in error.error.keyValue) {
          errorKey = key;
          errorValue = error.error.keyValue[key];
        }
        this.setError(error.error.code, `Duplicate value error { ${errorKey} : ${errorValue} }`);
      }
    })
  }

  setError(code = 11000, msg = 'Error Occur! Please try Again!') {
    this.isError = true;
    this.error = {
      code: code,
      msg: msg
    }
  }

  boxClose() {
    this.isError = false;
  }

}
