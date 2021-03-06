import { Store } from "./Store";

export class ReduceStore extends Store{
    constructor(dispatcher) {
        super(dispatcher);
        this.__histore = [];
    }    

    __onDispatch(action) {
        const newState = func(this.__state, action);
        if (newState !== this.__state) {
            this.__histore.push(this.__state);
            this.__state = newState;
            this.__emitChange();
        }
    }

    revertLastHistory() {

    }
}