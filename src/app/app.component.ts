import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers: any;
  inactiveUsers: any;

  constructor( private userService: UserService) {
    this.activeUsers = userService.activeUsers;
    this.inactiveUsers = userService.inactiveUsers;
  }
}
