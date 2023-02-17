import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ResponseService } from 'src/app/services/response.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  isFormSubmitted = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  matcher = new MyErrorStateMatcher();
  constructor(
    private router: Router,
    private responseService: ResponseService
  ) {
    localStorage.clear();
  }

  ngOnInit(): void {}
  onSubmit() {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      const { email } = this.loginForm.value;
      localStorage.setItem('user', JSON.stringify(email));
      this.router.navigate(['/dashboard']);
    } else {
      this.responseService.openSnackBar('Please enter valid data ', 'error');
    }
  }
  getButtonStatus() {
    if (this.isFormSubmitted) {
      return this.loginForm.valid ? 'primary' : 'warn';
    } else {
      return 'primary';
    }
  }
}
