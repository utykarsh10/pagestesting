import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import stores from './data/stores';
import items from './data/items';
import React from 'react';

import HomePage from  './pages/HomePage'
import OrderPage from './pages/OrderPage';
import StoresPage from './pages/StoresPage';


function App() {  

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/OrderPage">
            <OrderPage items = {items}></OrderPage>
          </Route>
          <Route path="/StoresPage">
            <StoresPage stores = {stores}></StoresPage>
          </Route>

        </header>
      </Router>
    </div>
  );
}

export default App;
