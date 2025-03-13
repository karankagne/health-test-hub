
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amedico-text text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Amedico</h3>
            <p className="text-gray-300 mb-4">
              Amedico provides high-quality diagnostic services with accurate results, helping you make informed decisions about your health.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amedico-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-amedico-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-amedico-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-amedico-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-300 hover:text-white transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/book-test" className="text-gray-300 hover:text-white transition-colors">
                  Book A Test
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-white transition-colors">
                  Health Checkup Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Tests</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tests/blood" className="text-gray-300 hover:text-white transition-colors">
                  Blood Tests
                </Link>
              </li>
              <li>
                <Link to="/tests/urine" className="text-gray-300 hover:text-white transition-colors">
                  Urine Tests
                </Link>
              </li>
              <li>
                <Link to="/tests/ecg" className="text-gray-300 hover:text-white transition-colors">
                  ECG & Related Tests
                </Link>
              </li>
              <li>
                <Link to="/organ/heart" className="text-gray-300 hover:text-white transition-colors">
                  Heart Tests
                </Link>
              </li>
              <li>
                <Link to="/organ/thyroid" className="text-gray-300 hover:text-white transition-colors">
                  Thyroid Tests
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Medical Center Dr, Healthcare City, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 123-456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@amedico.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Amedico. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
