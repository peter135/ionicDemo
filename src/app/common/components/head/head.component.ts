import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { MoremenuComponent } from '../moremenu/moremenu.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})

export class HeadComponent implements OnInit {

  title:string;
  constructor( private menu: MenuController, private popoverController: PopoverController ) {

  }

  ngOnInit() {
    this.title = '标题';
  }

  menuFunction ()  {
    this.menu.enable(true, 'slideMenu');
    this.menu.open('slideMenu');
  };

  async moreMenuFunction (ev: any)  {
    const popover = await this.popoverController.create({
      component: MoremenuComponent,
      event: ev,
      translucent: true,
      showBackdrop: true
    });
    return await popover.present();
  };

}
