export class CounterService {
    inactiveCounter = 0;
    activeCounter = 0;
    inactiveCounterClick() {
        this.inactiveCounter++;
        console.log('Inactive Click:' + this.inactiveCounter);
    }

    activeCounterClick() {
        this.activeCounter++;
        console.log('Active Click:' + this.activeCounter);
    }
}
