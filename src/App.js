import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme';
import HomePage from './customer/pages/HomePage/HomePage';
import Routers from './routers/Routers';
import CustomerRoutes from './routers/CustomerRoutes';

function App() {
      return (
        <ThemeProvider theme = {darkTheme}>
        <CssBaseline/>
       {/* <Routers/> */}
       <CustomerRoutes/>
        </ThemeProvider>
      )
  }

export default App;
