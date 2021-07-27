import React from 'react';
import Store from './Store';


function StoreList({ stores }) {

    return (

        <table id = "storetable">  
            <caption>List of stores</caption>
            <thead>
                <tr>
                    <th>City:</th>
                    <th>State:</th>
                    <th>Zip Code:</th>
                </tr>
            </thead>

            <tbody>
                {stores.map((store, i) => <Store store={store} key={i} />)}
            </tbody>
        </table>
    
    );


}   
  
export default StoreList;