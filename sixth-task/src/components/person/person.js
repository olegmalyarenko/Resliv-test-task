import React from 'react';
const Person = ({user, onDelete }) => {
         

      return (
        <li className='list-group-item todo-list-item-label'
        >
             {user.first_name}
                         
                <button className="btn btn-outline-danger btn-sm float-right"
                onClick={() => onDelete(user.id)}>
                  <i className="fa fa-trash-o"/>
                </button>
             
            
        </li>
      )
    };

export default Person;