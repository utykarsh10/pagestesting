import React from 'react';
import StoreList from '../components/StoreList';
import { Link } from 'react-router-dom';

import{ useState } from 'react'

function StoresPage({stores}) {
  const [num, setNum] = useState('');

  return (
    <>
      <h1>Stores Page</h1>

      <body>
          <StoreList stores = {stores}> </StoreList>
            <form>
              <fieldset>
                <legend> </legend>
                <label> Please enter your zip code: 
                  <input type = "text" value = {num}    
                    onChange={e => setNum(e.target.value)} />

                </label>
              </fieldset>

              <button onClick={e=> {
                setNum(e.target.value);
                alert(`Your Zip Code is ${num}`);
                e.preventDefault();
              }}>Submit</button>

            </form>
          <br>
          
          
          </br>
          <Link to="/"> Go to the Home Page</Link>

        </body>
     
    </>
  );
}

export default StoresPage;