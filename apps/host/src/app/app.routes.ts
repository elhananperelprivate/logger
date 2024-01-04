import { Route } from '@angular/router';
import { SimulateErrorComponent } from './components/simulate-error/simulate-error.component';

export const appRoutes: Route[] = [
  {
    path: 'remote1',
    loadChildren: () => import('remote1/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: SimulateErrorComponent,
  },
];
