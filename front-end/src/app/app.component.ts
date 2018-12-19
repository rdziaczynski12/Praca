import { Component } from '@angular/core';


export interface Link{
  name : String;
  link : String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links : Link []= [
    {name : 'Strona główna' , link :'/home'},
    {name : 'Panel administratora' , link :'/admin-panel'},
  ];

  activeLink = window.location.pathname;

}
