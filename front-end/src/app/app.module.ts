import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent, EditUserDialog } from './admin-panel/admin-panel.component';
import {UserService} from './service/user.service';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule, MatIconModule, MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPanelComponent,
    EditUserDialog,
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
  ],
  entryComponents: [
    EditUserDialog,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
