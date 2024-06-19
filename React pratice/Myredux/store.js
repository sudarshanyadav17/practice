
import { legacy_createStore as createStore } from "redux";

import AllReducer from "./mainreducer";

const Mystore= createStore( AllReducer );

export default Mystore;