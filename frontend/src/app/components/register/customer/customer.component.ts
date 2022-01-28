import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City, Country } from 'src/app/models/country';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/service/auth.service';
import { CountryService } from 'src/app/service/country.service';
import { FileService } from 'src/app/service/file.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() next!: string;
  isError: boolean = false;
  error: any = null;
  submitted: boolean = false;
  profile = new Customer('', { address1: '', address2: null, district: '', state: '', pin: '' }, '', '', '', '', true, true);
  country = new Country('', '', '', '', [{ name: '', code: '', latitude: '', longitude: '', cities: [{ name: '', latitude: '', longitude: '' }] }]);
  cities: Array<City> = [];
  file!: File;

  registerForm = new FormGroup({
    customerName: new FormControl('', Validators.required),
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
    photo: new FormControl('', Validators.required),
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

    this.profile.name = form.controls['customerName'].value;
    this.profile.mobile = form.controls['mobile'].value;
    this.profile.email = form.controls['email'].value;
    this.profile.address.address1 = form.controls['address'].get('address1')?.value;
    this.profile.address.address2 = form.controls['address'].get('address2')?.value;
    this.profile.address.district = form.controls['address'].get('district')?.value;
    this.profile.address.state = form.controls['address'].get('state')?.value;
    this.profile.address.pin = form.controls['address'].get('pin')?.value;
    this.profile.password = form.controls['password'].value;

    this.addAccount(this.profile);
  }

  fileOnChange(event: any) {
    this.file = event.target.files[0];
  }

  addAccount(newProfile: Customer) {
    this.register.addAccount(newProfile, this.next).subscribe({
      next: (data: any) => {
        this.submitted = false;
        this.fileService.upload([this.file], data, this.next).subscribe(data => console.log(data));
        this.router.navigate(["login"]);
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

  countryList() {
    this.countryService.getList().subscribe({
      next: (data) => this.country = data[0],
      error: error => console.log(error)
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
