import React from 'react';



const Person = (data) => {
  
     
      return (
        <li className='list-group-item'
        key = {data.id}
        onClick={() => alert(id)}>
           {data.name}
        </li> 
      
  );
  
}
export default Person;