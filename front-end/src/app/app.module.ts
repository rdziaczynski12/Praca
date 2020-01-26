import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent, EditUserDialog } from './user-list/user-list.component';
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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { MenuComponent, EditMenuDialog, AddMenuDialog } from './menu/menu.component';
import { RestaurantListComponent, EditRestaurantDialog, AddRestaurantDialog    } from './restaurant-list/restaurant-list.component';
import { DishListComponent, EditDishDialog, AddDishDialog  } from './dish-list/dish-list.component';
import { TypeDishListComponent, EditTypeDishDialog, AddTypeDishDialog } from './type-dish-list/type-dish-list.component';
import { MenuClientComponent, AddOrderDialog } from './menu-client/menu-client.component';
import { OrderAdminComponent } from './order-admin/order-admin.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderUserComponent } from './order-user/order-user.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OrderPaidComponent } from './order-paid/order-paid.component';
import { MyPanelComponent } from './my-panel/my-panel.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    EditUserDialog,
    EditMenuDialog,
    AddMenuDialog,
    AddOrderDialog,
    EditDishDialog, 
    AddDishDialog,
    EditTypeDishDialog, 
    AddTypeDishDialog,
    EditRestaurantDialog,
    AddRestaurantDialog,  
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    RestaurantListComponent,
    DishListComponent,
    TypeDishListComponent,
    MenuClientComponent,
    OrderAdminComponent,
    MyOrderComponent,
    OrderUserComponent,
    OrderPaidComponent,
    MyPanelComponent,

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
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
  ],
  entryComponents: [
    EditUserDialog,
    EditMenuDialog,
    AddMenuDialog,
    AddOrderDialog,
    EditDishDialog, 
    AddDishDialog,
    EditRestaurantDialog,
    AddRestaurantDialog,  
    EditTypeDishDialog, 
    AddTypeDishDialog,
  ],
  providers: [
    UserService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
