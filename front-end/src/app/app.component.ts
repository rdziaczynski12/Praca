import { Component } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private roles: string[];
  public showSideNav = false;
  private activeLink = window.location.pathname;
  constructor(private tokenStorage: TokenStorageService,
    private router: Router) { }
 
  ngOnInit() {
  }

  showMenu(){
    this.showSideNav=!this.showSideNav;
  }

  updateActiveLink(){
      this.activeLink = window.location.pathname;
  }

  isLogin():boolean {
    return this.tokenStorage.isLogin();
  }

  isAdmin(): boolean {
    return this.tokenStorage.isAdmin();
  }

  isUser(): boolean {
    return this.tokenStorage.isUser();
  }
   
  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']).finally(function() {
      window.location.reload();
    });
    
  }

}
