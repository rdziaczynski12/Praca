import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class MenuClientComponent implements OnInit {

  menuList: Menu[];
  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.menuService.getActiveMenu().subscribe(date => {
      this.menuList = date;
    });
  }

  addOrder() {

  }

  addQuantity() {

  }

  deleteQuantity() {

  }
}
