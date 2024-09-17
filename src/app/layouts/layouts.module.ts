import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminLayoutComponent, WebLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [AdminLayoutComponent],
})
export class LayoutsModule {}
