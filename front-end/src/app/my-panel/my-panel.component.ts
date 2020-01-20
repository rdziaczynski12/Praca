import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';


export class ChangePasswordData{
  userName: String;
  currentPassword: String;
  newPassword: String;
}
export class ChangeEmailData{
  userName: String;
  email: String;
}

@Component({
  selector: 'app-my-panel',
  templateUrl: './my-panel.component.html',
  styleUrls: ['./my-panel.component.css']
})
export class MyPanelComponent implements OnInit {

  user: User = new User();
  changePasswordData: ChangePasswordData = new ChangePasswordData();
  changeEmailData: ChangeEmailData = new ChangeEmailData();
  
  // currentUser: number;
  // currentPassword: any;
  // password: any;
  // account: number[]= [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
  // chance: number=0.0;
  // dataSourceGraph: Object;
  // dataSourceHistory: Object;
  // panelOpenGraph: boolean = false;
  // panelOpenHistory: boolean = false;
  // accountState: Array<any>=new Array(20);
  // result: Array<any>=new Array(20);

  // newActivationPassword: String;

  changePasswordForm = new FormGroup({
    currentPassword : new FormControl('', [
      Validators.required,
    ]),
    newPassword : new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'),
    ]),
    confirmPassword : new FormControl('', [
      Validators.required,
    ])
  });

  changeEmailForm = new FormGroup({
    email : new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });


  constructor(public tokenStorage: TokenStorageService,
    private userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.userService.getUserData(this.tokenStorage.getUsername()).subscribe(data => {
      this.user = data;
    });
  }

  changePassword(){
    if(this.changePasswordForm.valid){
      this.changePasswordData.userName = this.user.username;
      this.changePasswordData.currentPassword = this.changePasswordForm.value.currentPassword;
      this.changePasswordData.newPassword = this.changePasswordForm.value.newPassword;
      this.userService.changePassword(this.changePasswordData.userName, this.changePasswordData.currentPassword, this.changePasswordData.newPassword).subscribe(data => {
        if(data=="0"){
          this.openSnackBar(1);
          this.appComponent.logout();
        }
        else {
          this.openSnackBar(2);
        }
      });
    }
  }

  changeEmail(){
    if(this.changeEmailForm.valid){
      this.changeEmailData.userName = this.user.username;
      this.changeEmailData.email = this.changeEmailForm.value.email;
      this.userService.changeEmail(this.changeEmailData.userName, this.changeEmailData.email).subscribe(data => {
        if(data=="0"){
          this.openSnackBar(3);
          this.router.navigate(['/my-panel']);
        }
        else {
          if(data=="1")
            this.openSnackBar(5);
          else
            this.openSnackBar(4);
        }
      });
    }
  }

  openSnackBar(flag: number) {
    switch (flag) {
      case 1:
        this.snackBar.open('Hasło zostało zmienione!\nZaloguj się ponownie przy użyciu nowego hasła.', 'Zamknij', {
          duration: 3000
        });
        break;
      case 2:
        this.snackBar.open('Wystąpił błąd przy zmianie hasła!', 'Zamknij', {
          duration: 3000
        });
        break;
      case 3:
        this.snackBar.open('E-mail zmieniono pomyślnie!', 'Zamknij', {
          duration: 3000
        });
        break;
      case 4:
        this.snackBar.open('Nie udana zmiana e-mail!', 'Zamknij', {
          duration: 3000
        });
      case 5:
        this.snackBar.open('Podany e-mail już istnieje!', 'Zamknij', {
          duration: 3000
        });
        break;
      default:
        this.snackBar.open('Wystąpił błąd.', 'Zamknij', {
          duration: 3000});
        break;
    }
  }

}