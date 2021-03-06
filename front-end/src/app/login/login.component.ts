import { Component, OnInit } from '@angular/core';
 
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLogin = false;
  private loginInfo: AuthLoginInfo;

  loginForm = new FormGroup({
    login: new FormControl("", Validators.compose([
      Validators.required
    ])),
    password: new FormControl("", Validators.compose([
      Validators.required
    ]))
    });
 
  constructor(private authService: AuthService, 
              private tokenStorage: TokenStorageService,
              private router: Router,
              public snackBar: MatSnackBar
              ) { }
 
  ngOnInit() {
      this.isLogin = this.tokenStorage.isLogin();
  }

  login(): void {
    this.loginInfo = new AuthLoginInfo(
      this.loginForm.value.login,
      this.loginForm.value.password);
    if(this.loginForm.valid)
      this.authService.attemptAuth(this.loginInfo).subscribe(
        data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUsername(data.username);
            this.tokenStorage.saveAuthorities(data.authorities);
            if(!this.tokenStorage.isUser())
              this.openSnackBar('Twoje konto jest nie aktywne skontaktuj się z administratorem!');
            else
              this.openSnackBar('Witamy!');
            this.router.navigate(['home']);
        },
        error => {
          console.log(error);
          this.openSnackBar('Niepoprawny login lub hasło !');
        }
      );
  }

  openSnackBar(text: string,): void {
    this.snackBar.open(text, 'Zamknij', {
      duration: 5000,
      verticalPosition: 'top'
    });
  }
}