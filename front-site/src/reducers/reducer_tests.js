import { FETCH_TESTS } from '../actions/index';

const INITIAL_STATE = {
    all: [],
    test: null
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_TESTS:
            return { ...state, tests: action.payload.data };
        default:
            return state;
    }
}