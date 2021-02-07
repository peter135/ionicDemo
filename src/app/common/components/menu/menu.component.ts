import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() contentId: string;
  userName: string;
  addressName: string;
  slideMenu: any;

  constructor() {
  }

  ngOnInit() {
    this.userName = '用户123';
    this.addressName = '地址123';
    this.slideMenu = [
      {"title": "菜单1"},
      {"title": "菜单2"},
      {"title": "菜单3"}];

  }

  clickItem(menu: any) {
    console.log('clickItem', menu);
  }

}
