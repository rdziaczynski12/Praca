import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent, EditUserDialog } from './admin-panel/admin-panel.component';
import {UserService} from './service/user.service';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatStepperModule } from "@angular/material/stepper";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MatSelectModule} from '@angular/material/select';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { MenuComponent, EditMenuDialog, AddMenuDialog } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPanelComponent,
    EditUserDialog,
    EditMenuDialog,
    AddMenuDialog,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatStepperModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatSelectModule,
  ],
  entryComponents: [
    EditUserDialog,
    EditMenuDialog,
    AddMenuDialog,
  ],
  providers: [
    UserService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
