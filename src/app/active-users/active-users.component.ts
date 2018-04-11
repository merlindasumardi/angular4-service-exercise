import { CounterService } from './../counter.service';
import { UserService } from './../user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CounterService]
})
export class ActiveUsersComponent {
  @Input() users: string[];
  counterActive= 0;

  constructor( private userService: UserService, private cs: CounterService ) {}
  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    this.cs.activeCounterClick();
    this.counterActive = this.cs.activeCounter;
  }
}
