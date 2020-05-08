import React, { useEffect } from 'react';
import './App.css';
import Router from './routes';
import GlobalStyles from './styles/global';
import {ToastContainer} from 'react-toastify';
import { fetchCountries } from './action/countries';
import { useDispatch } from 'react-redux';
function App() {
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());

  }, []);

  return (
    <React.Fragment>
            {/* <ToastContainer/> */}
      <GlobalStyles/>
      <Router/>
{/* Same as */}

    </React.Fragment>
  );

}
export default App;
