import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, PrimengModule, HttpClientModule, ReactiveFormsModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    PrimengModule,
    ReactiveFormsModule,
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
    LoadingComponent,
  ],
})
export class SharedModule {}
