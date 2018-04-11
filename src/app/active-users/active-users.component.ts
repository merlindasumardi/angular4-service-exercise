import { CounterService } from './../counter.service';
import { UserService } from './../user.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CounterService]
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor( private userService: UserService, private cs: CounterService ) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }
}
