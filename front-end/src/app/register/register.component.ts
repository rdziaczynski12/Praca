import { Component, OnInit } from '@angular/core';
 
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isLogin = false;
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
      Validators.minLength(8),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
    ])),
    repeatPassword: new FormControl("", Validators.compose([
      Validators.required,
      //Validators.pattern(this.password)
    ])),
    email: new FormControl("", Validators.compose([
      Validators.required,
      Validators.email
    ])),
    });
  
 
  constructor(private authService: AuthService,
              private router: Router,
              public snackBar: MatSnackBar,
              private tokenStorage: TokenStorageService
    ) { }
 
  ngOnInit() { 
    this.isLogin = this.tokenStorage.isLogin();
  }
 
  register() {
    this.password=this.registerForm.value.password;
    this.registerForm.controls.repeatPassword.setValidators([
      Validators.required,
      Validators.pattern(this.password)
    ]);
    this.registerForm.controls.repeatPassword.updateValueAndValidity();
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
          this.openSnackBar("Rejestracja udana! \n Zaloguj się");
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
          this.openSnackBar("Rejestracja nie udana! \n" + error.error.message);
        }
      );
  }

  openSnackBar(text: string): void {
    this.snackBar.open(text, 'Zamknij', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}