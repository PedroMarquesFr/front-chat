import { combineReducers } from "redux";

import APIRegister from './APIRegister';
import APILogin from './APILogin';
// import CartItems from './CartItems';


export default combineReducers({
    APIRegister, APILogin
});