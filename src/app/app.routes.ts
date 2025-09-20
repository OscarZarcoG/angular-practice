import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { count } from 'console';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import path from 'path';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'counter',
        component: CounterPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
