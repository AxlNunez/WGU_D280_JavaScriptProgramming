import { RouterModule, Routes } from '@angular/router';
import { SvgComponent } from './components/svg.component';

export const routes: Routes = [
  { path: '', component: SvgComponent}, 
];

export const AppRoutingModule = RouterModule.forRoot(routes);
