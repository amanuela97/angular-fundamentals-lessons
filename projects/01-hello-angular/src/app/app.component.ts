import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <ol>
      <li>Batman</li>
      <li>Superman</li>
      <li>Aquaman</li>
    </ol>
  `,
  styles: `li {
    list-style-type: upper-roman
    }`,
})
export class AppComponent {}
