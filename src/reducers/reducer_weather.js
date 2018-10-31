import { FETCH_WEATHER } from "../actions"

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]) //we shouldnt modify existing array with push
            // concat creates a new array and adds the element
            //concat is the same as the below 
            return [action.payload.data, ...state]
    }
    return state
}