import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav>
    <ul>
      <li><NavLink to="/books"><div className="icon royalty-016-papyrus" />Books</NavLink></li>
      <li><NavLink to="/characters"><div className="icon royalty-033-knight" />Characters</NavLink></li>
      <li><NavLink to="/houses"><div className="icon royalty-030-blazon" />Houses</NavLink></li>
    </ul>
  </nav>
);
