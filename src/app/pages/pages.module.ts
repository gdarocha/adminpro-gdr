import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { SharedModules } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
    ],
    imports: [
        SharedModules,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModules { }
