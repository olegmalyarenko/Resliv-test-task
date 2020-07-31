import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
      return (
       <ul>
         <li>
           
             <Link to='/'>Главная</Link>
          
           </li>
         <li>
           
           <Link to='/employees'>Сотрудники</Link>
           
           </li>
       </ul>
  );
  }
}
