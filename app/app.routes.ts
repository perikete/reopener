import { provideRouter, RouterConfig }  from '@angular/router';
import { LinksComponent } from './links/links.component';
import {HomeComponent} from "./home/home.component";

const routes: RouterConfig = [
    {
        path: 'links',
        component: LinksComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
