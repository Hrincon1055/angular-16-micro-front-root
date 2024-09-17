import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../../infraestructure/ui/app.layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public LayoutService: LayoutService, public el: ElementRef) {}
}
