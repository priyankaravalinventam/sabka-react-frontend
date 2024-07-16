import React, { useState } from 'react';
import { useAuth } from '../src/context/AuthContext';
import { Link } from '../renderer/Link'
import LogoLink from './LogoLink';
import { Menu, X } from 'lucide-react';

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`bg-transparent shadow-sm ${className}`}>
      <div className="container flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 p-4 h-auto md:h-16">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <LogoLink />
          <button
            className="sm:hidden text-indigo-950"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-10 ${menuOpen ? 'flex' : 'hidden'} sm:flex`}>
          <Link to="/templates" className="text-sm sm:text-base py-2">Templates</Link>
          <Link to="/pricing" className="text-sm sm:text-base py-2">Pricing</Link>

          {isAuthenticated ? (
            <button onClick={logout} className="text-sm sm:text-base py-2">Logout</button>
          ) : (
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Link
                to="/login"
                className="text-sm sm:text-base text-indigo-950/[.95] border-2 border-transparent hover:border-2 hover:border-indigo-950 hover:text-indigo-950 rounded-full px-5 py-1 transition duration-300 cubic-bezier(0.68, -0.55, 0.265, 1.55)"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm sm:text-base text-indigo-950/[.95] hover:bg-indigo-950 hover:text-white rounded-full border-2 border-indigo-950/[.95] px-4 py-1 transition duration-300 cubic-bezier(0.68, -0.55, 0.265, 1.55)"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;