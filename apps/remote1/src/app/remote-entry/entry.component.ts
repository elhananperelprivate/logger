import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'logger-remote1-entry',
  template: `<logger-nx-welcome></logger-nx-welcome>`,
})
export class RemoteEntryComponent {}
