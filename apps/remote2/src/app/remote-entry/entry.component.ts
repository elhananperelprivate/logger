import { Component } from '@angular/core';
import { SimulateErrorComponent } from '../components/simulate-error/simulate-error.component';

@Component({
  standalone: true,
  imports: [SimulateErrorComponent],
  selector: 'logger-remote2-entry',
  template: `<logger-simulate-error />`,
})
export class RemoteEntryComponent {}
