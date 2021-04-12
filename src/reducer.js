import * as actions from './actionTypes';
let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state, //spread some love
                {
                    id: ++lastId, //values for new object
                    description: action.payload.description, //need to pass this one as a parameter
                    resolved: false,
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug =>
                bug.id !== action.payload.id //need id as parameter
            );
        case actions.BUG_RESOLVED:
            return state.map(bug =>
                bug.id !== action.payload.id ? bug : { ...bug, resolved: true } //original or copy with new parameters
            ); //need id as parameter
        default:
            return state;
    }
}