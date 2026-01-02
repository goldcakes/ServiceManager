import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { MyRequests } from './pages/my-requests/my-requests';
import { AllWork } from './pages/all-work/all-work';
import { TeamWork } from './pages/team-work/team-work';
import { MyWork } from './pages/my-work/my-work';

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
    {
        path:'my-work',
        component: MyWork
    },
    {
        path:'team-work',
        component: TeamWork
    },
    {
        path:'all-work',
        component: AllWork
    },
];
