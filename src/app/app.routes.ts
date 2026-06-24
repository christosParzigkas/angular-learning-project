import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { PageOne } from './pages/page-one/page-one';
import { PageTwo } from './pages/page-two/page-two';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'page-one', component: PageOne },
  { path: 'page-two', component: PageTwo },
  { path: '**', redirectTo: '' },
];
