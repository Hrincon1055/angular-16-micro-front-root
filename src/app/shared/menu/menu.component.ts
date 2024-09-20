import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../infraestructure/ui/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menuModel: any[] = [
    {
      label: 'Home',
      items: [
        {
          label: 'Micro modelos',
          icon: 'pi pi-fw pi-home',
          routerLink: ['/dashboard'],
        },
      ],
    },


  ];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {}
}
