import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City, Country } from 'src/app/models/country';
import { Login } from 'src/app/models/login';
import { Vendor } from 'src/app/models/vendor';
import { AuthService } from 'src/app/service/auth.service';
import { CountryService } from 'src/app/service/country.service';
import { FileService } from 'src/app/service/file.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  @Input() next!: string;
  isError: boolean = false;
  error: any = null;
  submitted: boolean = false;
  profile = new Vendor(0, '', '', { address1: '', address2: null, district: '', state: '', pin: '' }, '', '', '', '', 0, false, false);
  login = new Login('', '', 0, false, 2);
  country = new Country('', '', '', '', [{ name: '', code: '', latitude: '', longitude: '', cities: [{ name: '', latitude: '', longitude: '' }] }]);
  cities: Array<City> = [];
  file1!: File;
  file2!: File;

  registerForm = new FormGroup({
    shopName: new FormControl('', Validators.required),
    ownerName: new FormControl('', Validators.required),
    address: new FormGroup({
      address1: new FormControl('', Validators.required),
      address2: new FormControl(''),
      district: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pin: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{5}')]),
    }),
    mobile: new FormControl('', [Validators.required, Validators.pattern('[1-9][0-9]{9}')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    ownerPhoto: new FormControl('', Validators.required),
    shopPhoto: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router, private register: RegisterService, private countryService: CountryService, private fileService: FileService) {
    if (this.authService.isLoggedIn(this.next)) {
      this.router.navigate([this.next]);
    }
    this.countryList();
  }

  ngOnInit(): void { }

  get rf() { return this.registerForm.controls; }
  get rfa() { return this.registerForm.controls['address']; }

  onSubmit(form: FormGroup) {
    this.submitted = true;

    this.profile.shopName = form.controls['shopName'].value;
    this.profile.ownerName = form.controls['ownerName'].value;
    this.profile.mobile = form.controls['mobile'].value;
    this.profile.email = form.controls['email'].value;
    this.profile.address.address1 = form.controls['address'].get('address1')?.value;
    this.profile.address.address2 = form.controls['address'].get('address2')?.value;
    this.profile.address.district = form.controls['address'].get('district')?.value;
    this.profile.address.state = form.controls['address'].get('state')?.value;
    this.profile.address.pin = form.controls['address'].get('pin')?.value;
    this.profile.vid = Date.now();

    this.login.password = form.controls['password'].value;
    this.login.email = form.controls['email'].value;
    this.login.lid = this.profile.vid;

    this.profile.ownerPhoto = this.login.lid + '.' + this.file1.type.split('/')[1];
    this.profile.shopPhoto = this.login.lid + '.' + this.file2.type.split('/')[1];
    this.addAccount(this.profile, this.login);
  }

  file1OnChange(event: any) {
    this.file1 = event.target.files[0];
  }

  file2OnChange(event: any) {
    this.file2 = event.target.files[0];
  }

  addAccount(newProfile: Vendor, newLogin: Login) {
    this.register.addAccount(newProfile, newLogin, this.next).subscribe({
      next: (data: boolean) => {
        this.submitted = false;
        if (data) {
          this.fileService.uploadMany([this.file1, this.file2], this.login.lid, [this.next, 'shop']).subscribe(data => console.log(data));
          this.router.navigate(["login"], { queryParams: { next: this.next } });
        } else {
          this.setError()
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

  countryList() {
    this.countryService.getList().subscribe({
      next: (data) => this.country = data[0],
      error: (error) => console.log(error)
    })
  }

  cityDropDown(code: string) {
    this.cities = [];
    this.country.states.forEach(state => {
      if (state.code === code) {
        state.cities.forEach(city => {
          this.cities.push(city.name);
        });
      }
    });
  }
}
