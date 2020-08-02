import React, { useContext } from 'react';
import { Context } from '../../context.js';
const Person = (user, { onDelete }) => {
  
  
     console.log(user.user);
      return (
        <li className='list-group-item todo-list-item-label'
        key = {user.user.id}
        >
           {user.user.first_name}
         
           <span  type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={() => onDelete(user.user.id)}>
            <i className="fa fa-trash-o" />
        </span>
        </li> 
      );
  
}
export default Person;