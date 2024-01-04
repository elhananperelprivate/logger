import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'logger-simulate-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simulate-error.component.html',
  styleUrls: ['./simulate-error.component.css'],
})
export class SimulateErrorComponent {
  simulateError() {
    throw new Error('This is a simulated error');
  }
}
