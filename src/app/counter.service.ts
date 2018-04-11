export class CounterService {
    inactiveCounter = 0;
    activeCounter = 0;
    inactiveCounterClick() {
        this.inactiveCounter++;
        console.log(this.inactiveCounter);
    }

    activeCounterClick() {
        this.activeCounter++;
    }
}
