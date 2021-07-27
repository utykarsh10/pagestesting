import React from 'react';
import { Link } from 'react-router-dom';
import {MdStore} from 'react-icons/md';

function HomePage() {
  return (
    <>
      <h1>Welcome to Market!</h1>
      <h2>  
        <MdStore size = "100px">
        </MdStore>
      </h2>
        <body>
          <div><Link to="/OrderPage"> Go to the Order Page</Link></div>
          <div><Link to="/StoresPage"> Go to the Stores Page</Link></div>
        </body>
    </>
  );
}

export default HomePage;