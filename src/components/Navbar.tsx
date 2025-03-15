
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Menu, X, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/book-test', label: 'Book A Test' },
    { path: '/packages', label: 'Health Checkup Packages' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md' : 'bg-blue-600'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/amedico-logo.svg" 
                alt="Ambedkarlabs Logo" 
                className="h-12 md:h-14" // Increased from h-8 md:h-10 to h-12 md:h-14
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50"><rect width="150" height="50" fill="%23FFFFFF"/><text x="10" y="30" font-family="Arial" font-size="20" font-weight="bold" fill="%230066cc">Ambedkarlabs</text></svg>';
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-4 py-2 rounded-md font-medium text-base transition-colors duration-200',
                  location.pathname === item.path 
                    ? (isScrolled ? 'text-blue-600' : 'text-white bg-blue-700')
                    : (isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:bg-blue-700')
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <div className="flex items-center ml-4">
              <Link
                to="/login"
                className={cn(
                  'hidden md:flex px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 items-center gap-2',
                  isScrolled ? 'text-blue-600 hover:bg-blue-600/10' : 'text-white hover:bg-blue-700'
                )}
              >
                <User className="h-4 w-4" />
                {isLoggedIn ? 'My Account' : 'Log In'}
              </Link>
              <button
                className={cn(
                  'p-2 rounded-full md:hidden',
                  isScrolled ? 'text-gray-700' : 'text-white'
                )}
                onClick={toggleMenu}
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-600/10 hover:text-blue-600'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-600/10 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {isLoggedIn ? 'My Account' : 'Log In'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
