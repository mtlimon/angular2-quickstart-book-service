import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from './home/home.component';
import { FeatureComponent }   from './feature/feature.component';
import { AboutComponent } from './about/about.component'; 
import { BookComponent } from './book/book.component'; 


const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'about', component: AboutComponent },
  { path: 'book', component: BookComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);