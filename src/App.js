import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Foreigner from './pages/Foreigner';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';
function App() {
 
  const [country, setCountry] = useState('');

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setCountry(res.data.country_name)
  }
  useEffect( () => {
    getData()
  }, [])
  return (
    <>
      <h1>Hi</h1>
      {
        country === 'Russia' ?
        <Home />
        : <Foreigner />
      }
    </>
  );
}

export default App;
