import store from "./store.js";
import * as actions from "./actionType"

//This functions gets called everytime the state of the store 
//gets changed
//Refresh the UI when the app is changed (React: Rerender)
//IF the current UI component is not going to be visable
//it should unsubscribe from the store
const unsubscribe = store.subscribe(() => {
    //Simple logging that will tell me everytime the store 
    //is changed
    console.log("Store changed!", store.getState());
})


//Adding something new to the store...I think 
//Adding a bug to the store
store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1"
    }
})


//Adding a bug removed action
store.dispatch({
    type:actions.BUG_REMOVED,
    payload: {
        id: 1
    }
})

console.log(store.getState());
