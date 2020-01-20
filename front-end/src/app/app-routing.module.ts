import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { TypeDishListComponent } from './type-dish-list/type-dish-list.component';
import { MenuClientComponent } from './menu-client/menu-client.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderAdminComponent } from './order-admin/order-admin.component';
import { OrderUserComponent } from './order-user/order-user.component';
import { OrderPaidComponent } from './order-paid/order-paid.component';
import { MyPanelComponent } from './my-panel/my-panel.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'admin-panel', component: AdminPanelComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'menu-client', component: MenuClientComponent},
  { path: 'my-order', component: MyOrderComponent},
  { path: 'my-panel', component: MyPanelComponent},
  { path: 'order-admin', component: OrderAdminComponent},
  { path: 'order-paid', component: OrderPaidComponent},
  { path: 'order-user', component: OrderUserComponent},
  { path: 'dish-list', component: DishListComponent},
  { path: 'type-dish-list', component: TypeDishListComponent},
  { path: 'restaurant-list', component: RestaurantListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
