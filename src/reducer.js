//OPTION 1: FOR IMPORTING MULTIPLE THINGS FROM A FILE
//import { BUG_ADDED, BUG_REMOVE } from "./actionType";

//Option 2: import everything and assign the properties
import * as actions from "./actionType"

let lastId = 0; 

//creating a reducer function to modify the store
export default function reducer(state = [], action){
    //The job of this reducer it to return a new state based off of the action
    if(action.type === actions.BUG_ADDED){
        //THIS IS PLAIN REDUX CODE
        return[...state, 
                {
                    //Makeing chages to the current state
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
        ]
    }
    else if (action.type === actions.BUG_REMOVED){
        return state.filter(bug => bug.id !== action.payload.id)
    }

    return state;
}