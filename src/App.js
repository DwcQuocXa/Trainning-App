import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCustomers } from './redux/actions/customers';
import NavBar from './components/NavBar';

function App() {
  const dispatch = useDispatch();
  const [openLeft, setOpenLeft] = useState(false);

  useEffect(() => {
    console.log('getCustomers');
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar open={openLeft} setOpen={setOpenLeft} />
    </BrowserRouter>
  );
}

export default App;
