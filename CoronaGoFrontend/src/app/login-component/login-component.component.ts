import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  @Output() googleLogin = new EventEmitter();

  hasOTP = false;
  errorMsg = '';

  @ViewChild('email') email: ElementRef;
  @ViewChild('otp') otp: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  validateEmail(email) {
    // tslint:disable-next-line: max-line-length
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  getOTP() {
    if (!this.email.nativeElement.value) {
      this.errorMsg = 'Please fill Email';
    } else if (this.email.nativeElement.value) {
      const email = this.email.nativeElement.value;
      if (!this.validateEmail(email)) {
        this.errorMsg = 'Please enter a valid email';
      } else {
        // fire for OTP
      }
    }
  }

  loginUser() {
    if (!this.otp.nativeElement.value) {
      this.errorMsg = 'Pleaes fill OTP';
    } else {
      // fire for login user
    }
  }

  loginWithGoogle() {
    this.googleLogin.emit('googlelogin');
  }

  userEditing() {
    this.errorMsg = '';
  }

  ngOnInit() {

  }

}
