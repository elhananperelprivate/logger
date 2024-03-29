import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SimulateErrorComponent } from '../components/simulate-error/simulate-error.component';

@Component({
  standalone: true,
  imports: [SimulateErrorComponent, NxWelcomeComponent],
  selector: 'logger-remote1-entry',
  template: `<logger-simulate-error />`,
})
export class RemoteEntryComponent {}
