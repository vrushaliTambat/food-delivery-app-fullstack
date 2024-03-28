import axios from "axios";
import { ADD_TO_FAVORITES_FAILURE, ADD_TO_FAVORITES_REQUEST, ADD_TO_FAVORITES_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { API_URL, api } from "../../../components/config/api";

export const registerUser=(reqData)=>async(dispatch)=>{
    dispatch({ type: REGISTER_REQUEST });

    try {
        //The response data is destructured to extract the data property.
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        //localStorage is a web API that allows web applications to store key-value pairs locally within the user's web browser.
    //It provides a simple way to persistently store data across browser sessions.
        if(data.jwt) localStorage.setItem("jwt",data.jwt)
        if(data.role==="ROLE_RESTAURANT_OWNER"){
          reqData.navigate("/admin/restaurant")
        }
        else{
          reqData.navigate("/")
        }
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
        console.log("register success",data)
      } catch (error) {
        dispatch({type: REGISTER_FAILURE, payload: error})
        console.log("catch error ------ ",error)
      }
}
export const loginUser=(reqData)=>async(dispatch)=>{
    dispatch({ type: LOGIN_REQUEST });

    try {
        //This line sends a POST request to ${API_URL}/auth/signup endpoint, passing reqData.userData as the request data. 
        const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);
        //setting key value pair inside localStorage jwt
        if(data.jwt) localStorage.setItem("jwt",data.jwt)
        if(data.role==="ROLE_RESTAURANT_OWNER"){
          reqData.navigate("/admin/restaurant")
        }
        else{
          reqData.navigate("/")
        }
        // If the registration is successful, it dispatches an action of type REGISTER_SUCCESS 
        //and passes the JWT token obtained from the response as payload.
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
        console.log("login success",data)
      } catch (error) {
        dispatch({type: LOGIN_FAILURE, payload: error})
        console.log("catch error ------ ",error)
      }
}
export const getUser=(jwt)=>async(dispatch)=>{
    dispatch({ type: GET_USER_REQUEST });

    try {
        const { data } = await api.get(`/api/users/profile`,{
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
        dispatch({ type: GET_USER_SUCCESS, payload: data});
        console.log("user profile",data)
      } catch (error) {
        dispatch({type: GET_USER_FAILURE, payload: error})
        console.log("error ------ ",error)
      }
}
export const addToFavorite=({jwt,restaurantId})=>async(dispatch)=>{
    dispatch({ type: ADD_TO_FAVORITES_REQUEST });

    try {
        const { data } = await api.put(`api/restaurants/${restaurantId}/add-favorite`,{},{
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
        dispatch({ type: ADD_TO_FAVORITES_SUCCESS, payload: data });
        console.log("added to favorite",data)
      } catch (error) {
        dispatch({type: ADD_TO_FAVORITES_FAILURE, payload: error})
        console.log("error ------ ",error)
      }
}

export const logout=()=>async(dispatch)=>{
   // dispatch({ type: ADD_TO_FAVORITES_REQUEST });

    try {
        localStorage.clear();
        dispatch({ type:LOGOUT});
        console.log("logout success")
    } catch (error) {
        console.log("error ------ ",error)
      }
}