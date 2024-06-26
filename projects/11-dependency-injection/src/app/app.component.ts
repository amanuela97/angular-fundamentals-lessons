import { Component, inject } from '@angular/core';
import { UserService } from './user.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { User } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>User Listing</h1>
    @for(user of userData; track user.id){
    <app-user-info [user]="user" />
    }
  `,
  imports: [UserInfoComponent],
})
export class AppComponent {
  userService = inject(UserService);
  userData: User[] = [];
  constructor() {
    this.userService.getUserData().then((data: User[]) => {
      this.userData = data;
    });
  }
}
