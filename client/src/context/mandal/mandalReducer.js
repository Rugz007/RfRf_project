import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GETMANDALS_SUCCESS,
    MANDAL_SUCCESS,
    UPDATEMANDAL_SUCCESS,
    //DELETEMANDAL_SUCCESS,
    MANDAL_FAIL,
  } from "../types";
 
export default (state, action) => {
  switch (action.type) {

    case GETMANDALS_SUCCESS:
        console.log(action.payload);
        return {
            ...state,

            allmandals: action.payload,
            
      };
    
    case MANDAL_SUCCESS:
        return {
            ...state,
            ...action.payload,
        };
    case UPDATEMANDAL_SUCCESS:
        return {
            ...state,
            mandal: action.payload,
        };
    case MANDAL_FAIL:
        return {
            ...state,
        }; 
    default:
        return state;             
  }
};    
  