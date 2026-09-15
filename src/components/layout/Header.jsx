import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-lg px-8 py-4 flex items-center justify-between">
  {/* Update the text color to white so it pops against the dark blue */}
  <div className="flex items-center gap-3">
    {/* Replace with your actual logo image tag */}
    <span className="text-2xl font-bold tracking-wide">CCYI Global Academy</span>
  </div>
  
  {/* Your nav links go here... */}
  <nav className="hidden md:flex items-center gap-6 text-white font-medium">
     {/* ... your links ... */}
  </nav>
</header>
  );
}

export default Header;

