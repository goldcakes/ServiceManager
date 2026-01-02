import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { MyRequests } from './pages/my-requests/my-requests';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home-page',
        pathMatch: 'full'
    },
    {
        path:'home-page',
        component: HomePage
    },
    {
        path:'my-requests',
        component: MyRequests
    },
];
