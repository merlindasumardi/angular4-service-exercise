import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor( private us: UserService, private cs: CounterService ) {}

  ngOnInit(): void {
    this.users = this.us.activeUsers;
  }

  onSetToActive(id: number) {
    this.us.onSetToActive(id);
  }
}
