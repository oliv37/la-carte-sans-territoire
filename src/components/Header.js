import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
          <Link to="/us-state">La carte sans le territoire</Link>  
        </header>
    );
}

export default Header;