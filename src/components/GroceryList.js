import React from 'react';

import GroceryItem from './GroceryItem';


function GroceryList({ items }) {

    return (

        <table id = "groctable">  
            <caption>Select quantity you want to buy!</caption>
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Price:</th>
                    <th>Quantity:</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, i) => <GroceryItem item={item} key={i} />)}
            </tbody>
        </table>
    
    );


}   
  
export default GroceryList;