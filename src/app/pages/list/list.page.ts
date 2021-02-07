import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})

export class ListPage implements OnInit {

  title:string;
  name:string;
  address:string;
  list:any;

  constructor() {
  }
  
  ngOnInit() {
    this.title = '测试';
    this.name = '测试';
    this.address = '测试';
    this.list = [
      {"id": 1, "name": "用户名1", "address": "地址1"},
      {"id": 2, "name": "用户名2", "address": "地址2"},
      {"id": 3, "name": "用户名3", "address": "地址3"}];
  }
 

}

