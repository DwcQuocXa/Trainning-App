import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCustomers, getTrainings } from './redux/actions';
import NavBar from './components/NavBar';
import Customers from './components/Customers';
import Trainings from './components/Trainings';

function App() {
  const dispatch = useDispatch();
  const [openLeft, setOpenLeft] = useState(false);

  useEffect(() => {
    console.log('getCustomers');
    dispatch(getCustomers());
    dispatch(getTrainings());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar open={openLeft} setOpen={setOpenLeft} />
      <Routes>
        <Route exact path='/customers' element={<Customers />} />
        <Route exact path='/trainings' element={<Trainings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
