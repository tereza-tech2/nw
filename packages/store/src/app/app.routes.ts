import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'verifier',
    loadChildren: () =>
      import('verifier/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'persona',
    loadChildren: () =>
      import('persona/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
