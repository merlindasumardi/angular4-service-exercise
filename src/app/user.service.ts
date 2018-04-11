import { CounterService } from './counter.service';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

  constructor(private cs: CounterService) {}

    onSetToActive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.cs.inactiveCounterClick();
      }

      onSetToInactive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.cs.activeCounterClick();
      }
}
