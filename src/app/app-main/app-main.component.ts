import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css'],
})
export class AppMainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  navItems = [
    { path: 'home', title: 'Home' },
    { path: 'lorem', title: 'Lorem Ipsum' },
    { path: 'home', title: 'Geräte' },
    { path: 'wizards', title: 'Wizards' },
    { path: 'home', title: 'Fernzugriff' },
    { path: 'home', title: 'Zählertabellen' },
  ];

  myroutes = AppRoutingModule.mypaths;
}
