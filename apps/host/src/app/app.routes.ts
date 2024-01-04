import { Route } from '@angular/router';
import { SimulateErrorComponent } from './components/simulate-error/simulate-error.component';

export const appRoutes: Route[] = [
  {
    path: 'remote2',
    loadChildren: () => import('remote2/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'remote1',
    loadChildren: () => import('remote1/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: SimulateErrorComponent,
  },
];
