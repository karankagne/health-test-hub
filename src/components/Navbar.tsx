
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        isScrolled ? 'bg-white shadow-md' : 'bg-amedico-teal'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/amedico-logo.svg" 
                alt="Amedico Logo" 
                className="h-8 md:h-10"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50"><rect width="150" height="50" fill="%23FFFFFF"/><text x="10" y="30" font-family="Arial" font-size="20" font-weight="bold" fill="%2300a99d">amedico.in</text></svg>';
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
                    ? (isScrolled ? 'text-amedico-teal' : 'text-white bg-amedico-dark-teal')
                    : (isScrolled ? 'text-amedico-text hover:text-amedico-teal' : 'text-white hover:bg-amedico-dark-teal')
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
                  'hidden md:block px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200',
                  isScrolled ? 'text-amedico-teal hover:bg-amedico-teal/10' : 'text-white hover:bg-amedico-dark-teal'
                )}
              >
                Log In
              </Link>
              <button
                className={cn(
                  'p-2 rounded-full md:hidden',
                  isScrolled ? 'text-amedico-text' : 'text-white'
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
                    ? 'bg-amedico-teal text-white'
                    : 'text-amedico-text hover:bg-amedico-teal/10 hover:text-amedico-teal'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-amedico-text hover:bg-amedico-teal/10 hover:text-amedico-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
