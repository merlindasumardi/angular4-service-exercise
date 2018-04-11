import { CounterService } from './../counter.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})
export class InactiveUsersComponent {
  @Input() users: string[];
  counterInactive= 0;

  constructor( private us: UserService, private cs: CounterService ) {}

  onSetToActive(id: number) {
    this.us.onSetToActive(id);
    this.cs.inactiveCounterClick();
    this.counterInactive = this.cs.inactiveCounter;
  }
}
