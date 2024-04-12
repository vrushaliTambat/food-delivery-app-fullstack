import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme';
import Routers from './routers/Routers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './customer/pages/State/Authentication/Action';
import { findCart } from './customer/pages/State/Cart/Action';

function App() {
  //get user action ned sto be diaptched when the application 
  //is rendered for the first time that's why we write in App.js
  const dispatch=useDispatch()
  const jwt = localStorage.getItem("jwt");
  //getting auth reducer from store
  const { auth } = useSelector((store) => store);

  //when auth.jwt value chnages thatis when user logs in or registers then the function will be executed
  useEffect(() => {
    //if auth.jwt is true or present, use auth.jwt, otherwise use jwt(one from localStorage)
      dispatch(getUser(auth.jwt || jwt));
      dispatch(findCart(jwt))
  }, [auth.jwt]);


      return (
        <ThemeProvider theme = {darkTheme}>
        <CssBaseline/>
        <Routers/>
        </ThemeProvider>
      )
  }

export default App;
