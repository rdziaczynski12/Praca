import { Component, OnInit } from '@angular/core';
 
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  password = '';
 
  registerForm = new FormGroup({
    firstName: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z]*'),
    ])),
    lastName: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern('[a-zA-Z-]*')
    ])),
    username: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z0-9]*')
    ])),
    password: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ])),
    repeatPassword: new FormControl("", Validators.compose([
      Validators.required,
      Validators.pattern(this.password)
    ])),
    email: new FormControl("", Validators.compose([
      Validators.required,
      Validators.email
    ])),
    });
  
 
  constructor(private authService: AuthService,
              private router: Router,
              public snackBar: MatSnackBar
    ) { }
 
  ngOnInit() { 
  }
 
  register() {
    this.password=this.registerForm.value.password;
    this.registerForm.controls.repeatPassword.setValidators([
      Validators.required,
      Validators.pattern(this.password)
    ]);
    this.registerForm.controls.repeatPassword.updateValueAndValidity();
    console.log(this.registerForm.value.password);
    this.signupInfo = new SignUpInfo(
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.registerForm.value.username,
      this.registerForm.value.password,
      this.registerForm.value.email
      );
    if(this.registerForm.valid)
      this.authService.signUp(this.signupInfo).subscribe(
        data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
      );
  }
}