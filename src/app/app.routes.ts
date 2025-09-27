import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { StructuralDirectivesComponent } from './pages/structural-directives/structural-directives.component';
import { AtributeDirectivesPageComponent } from './pages/atribute-directives-page/atribute-directives-page.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'counter',
        component: CounterPageComponent
    },
    {
        path: 'structural-directives',
        component: StructuralDirectivesComponent
    },
    {
        path: 'atribute-directives-page',
        component: AtributeDirectivesPageComponent
    },
    {
        path: 'data-binding-page',
        component: DataBindingPageComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
