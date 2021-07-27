import React from 'react';
import GroceryList from '../components/GroceryList';
import { Link } from 'react-router-dom';


function OrderPage({items}) {

  return (
    <>
      <h1>OrderPage</h1>
        <body>
          <GroceryList items = {items}> </GroceryList>
          <br>
          
          
          </br>
          <Link to="/"> Go to the Home Page</Link>
        </body>
     
    </>
  );
}

export default OrderPage;