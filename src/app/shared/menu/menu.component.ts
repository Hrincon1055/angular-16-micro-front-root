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
          label: 'Dashboard',
          icon: 'pi pi-fw pi-home',
          routerLink: ['/dashboard'],
        },
      ],
    },
    {
      label: 'Otrso Itemn',
      items: [
        {
          label: 'Form Layout',
          icon: 'pi pi-fw pi-id-card',
          routerLink: ['/uikit/formlayout'],
        },
      ],
    },
    {
      label: 'Aministración',
      icon: 'pi pi-fw pi-briefcase',
      items: [
        {
          label: 'Configuración',
          icon: 'pi pi-fw pi-cog',
          items: [
            {
              label: 'Usuarios',
              icon: 'pi pi-fw pi-users',
              routerLink: ['/administrar/usuarios'],
            },
            {
              label: 'Crear Usuario',
              icon: 'pi pi-user',
              routerLink: ['/administrar/usuario/crear'],
            },
          ],
        },
      ],
    },
  ];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {}
}
