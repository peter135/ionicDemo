import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-moremenu',
  templateUrl: './moremenu.component.html',
  styleUrls: ['./moremenu.component.scss'],
})
export class MoremenuComponent implements OnInit {

  moreMenu: any;

  constructor() {
  }

  ngOnInit() {
    this.moreMenu = [{
      "title": "功能1",
      },{
      "title": "功能2"
      },{
      "title": "功能3"
      }];
  }

  clickMenu(menu: any) {
    console.log('clickItem', menu);

  }

}
