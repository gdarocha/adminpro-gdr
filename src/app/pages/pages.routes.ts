import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
          { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'}},
          { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'}},
          { path: 'graphics1', component: Graphics1Component, data: { titulo: 'Gráficas'}},
          { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}},
          { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs'}},
          { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema' }},
          { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'}},
          // Mantenimientos
          { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de usuarios'}},
          { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de hospitales'}},
          { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de médicos'}},
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
      }
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
