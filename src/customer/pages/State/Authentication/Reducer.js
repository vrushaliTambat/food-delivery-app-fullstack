import { isPresentInFavorites } from "../../../components/config/logic";
import { ADD_TO_FAVORITES_FAILURE, ADD_TO_FAVORITES_REQUEST, ADD_TO_FAVORITES_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favorites: [],
    success: null,
  };

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITES_REQUEST:
            return { ...state, isLoading: true, error: null, success: null };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jwt: action.payload,
                success: "Register Success",
            };
        case GET_USER_SUCCESS:
          return {
            ...state,
            isLoading: false,
            user: action.payload,
            //favorites: action.payload.favorites,
          };
      
        case ADD_TO_FAVORITES_SUCCESS:
                return {
                  ...state,
                  isLoading: false,
                  error: null,
                  // favorites:[action.payload,...state.favorites],
                  favorites: isPresentInFavorites(state.favorites, action.payload)
                  //removes items from fav list
                    ? state.favorites.filter((item) => item.id !== action.payload.id)
                    //adds item to favorites list
                    : [action.payload, ...state.favorites],
                };

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case ADD_TO_FAVORITES_FAILURE:
          return { ...state, isLoading: false, error: action.payload };
            
    
        default:
          return state;
    }
}