import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => (
  <nav className="nav">
    <Link to="/">Builder</Link>
    <Link to="/landing/page-1">Landing Page</Link>
    <Link to="/landing/page-2">Landing Page2</Link>

  </nav>
);

export default Navigation;
