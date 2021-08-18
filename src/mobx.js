import { observable, action, autorun, computed } from 'mobx';

class Store {
    @observable count = 1
    @action.bound add() {
        this.count++
    }
}

export default Store