import React from 'react';
import { Link } from "react-router-dom"

// logo
import Logo from "../assets/img/logo.svg"

const Header = () => {
  return <header className='py-6 mb-12 border-b'>
    <div className="container mx-auto flex justify-between
    items-center">
      {/* logo */}
      <Link to='/'>
        <img src={Logo} alt="" />
      </Link>
      {/* buttons */}
      <div className='flex items-center gap-6'>
        <Link to=''>Login</Link>
        <Link to=''>Sign up</Link>
      </div>
    </div>
  </header>;
};

export default Header;
