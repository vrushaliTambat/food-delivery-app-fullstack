import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme';
import HomePage from './customer/pages/HomePage/HomePage';
import Routers from './routers/Routers';
import CustomerRoutes from './routers/CustomerRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './customer/pages/State/Authentication/Action';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
      dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt]);

      return (
        <ThemeProvider theme = {darkTheme}>
        <CssBaseline/>
       <CustomerRoutes/>
        </ThemeProvider>
      )
  }

export default App;
