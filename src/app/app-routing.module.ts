import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  /** Rutas Dashboard */
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./presentation/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  /** Rutas Micro models and control */
  {
    path: 'modelsAndControls',
    component: AdminLayoutComponent,
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.urlsMicro.modelsAndControls.remoteEntry,
        exposedModule: environment.urlsMicro.modelsAndControls.exposedModule,
      }).then((m) => m.ModelsAndControlsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
