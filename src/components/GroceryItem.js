import React from 'react';
import Counter from '../components/Counter'

function GroceryItem({item})  {

   
    return (
      <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td><Counter></Counter></td>
      </tr>
    );
}


export default GroceryItem;