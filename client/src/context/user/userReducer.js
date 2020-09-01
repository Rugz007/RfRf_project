import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AOI_SUCCESS,
  AOI_FAIL,
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        user: action.payload.user,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
      
    case AOI_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        Aoi: action.payload,

      };
    case AOI_FAIL:
      return {
    
      };

    case LOGIN_FAIL:
    case AUTH_ERROR:
      return {
        ...state,
        ...action.payload,
        token: null,
        user: null,
        isAuth: false,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuth: false,
        user: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
      };

    case REGISTER_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
};
