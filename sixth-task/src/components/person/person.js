import React from 'react';



const Person = (user) => {
  
    
      return (
        <li className='list-group-item'
        key = {user.user.id}
        onClick={() => alert(user.user.id)}>
           {user.user.first_name}
        </li> 
      );
  
}
export default Person;