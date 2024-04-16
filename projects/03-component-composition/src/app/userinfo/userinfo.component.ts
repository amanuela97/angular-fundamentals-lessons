import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>username: jon doe</p> `,
  styles: ``,
})
export class UserinfoComponent {}
