
import { createStore } from "redux";
//import {configureStore  } from "@reduxjs/toolkit"
import reducer from "./reducer"

//pass a ref of the reducer method
const store = createStore(reducer);

export default store;