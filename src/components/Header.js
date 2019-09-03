import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
          <Link to="/">La carte sans territoire</Link>  
        </header>
    );
}

export default Header;