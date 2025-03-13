
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-amedico-teal mb-6 animate-gentle-pulse">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-amedico-text mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-amedico-teal text-white rounded-md font-medium hover:bg-amedico-dark-teal transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
