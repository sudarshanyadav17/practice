import { combineReducers } from "redux";

import Basiclist from "./basicreducer";
import Contactlist from "./contactreducer";
import Experiencelist from "./experiencereducer";
import Educationlist from "./educationreducer";

const AllReducer=combineReducers(
    { Basiclist, Contactlist,Educationlist ,Experiencelist }
);

export default AllReducer;