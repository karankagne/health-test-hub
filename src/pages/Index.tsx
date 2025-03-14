import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Heart, Activity, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrganCard from '@/components/OrganCard';
import TestCard from '@/components/TestCard';
import LabCarousel from '@/components/LabCarousel';
import { organTests, popularTests } from '@/lib/testData';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 md:pt-20 bg-gradient-to-br from-amedico-teal to-amedico-dark-teal text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className={cn(
                "text-3xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000",
                isVisible && "opacity-100"
              )}
            >
              Advanced Diagnostic Tests for Better Health
            </h1>
            <p 
              className={cn(
                "text-lg md:text-xl mb-8 opacity-0 transition-opacity duration-1000 delay-300",
                isVisible && "opacity-100"
              )}
            >
              Accurate diagnostics with state-of-the-art technology, delivered with care and precision for your wellbeing.
            </p>
            <div 
              className={cn(
                "flex flex-col sm:flex-row justify-center gap-4 opacity-0 transition-opacity duration-1000 delay-500",
                isVisible && "opacity-100"
              )}
            >
              <Link 
                to="/book-test" 
                className="bg-white text-amedico-teal px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Book A Test <ArrowRight size={18} />
              </Link>
              <Link 
                to="/packages" 
                className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors duration-300"
              >
                View Health Packages
              </Link>
            </div>
          </div>
        </div>
        <div className="h-16 bg-white rounded-t-[50px] md:rounded-t-[100px]"></div>
      </section>
      
      {/* Lab Carousel Section */}
      <LabCarousel />
      
      {/* Vital Organs Tests Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="inline-block py-1 px-3 bg-amedico-teal/10 text-amedico-teal rounded-full text-sm font-medium mb-4">
              INTRODUCING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-amedico-text mb-4">
              Vital Organs Tests
            </h2>
            <p className="text-gray-600">
              Comprehensive diagnostic tests focused on your vital organs for complete health assessment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {organTests.map((organ) => (
              <OrganCard 
                key={organ.id}
                id={organ.id}
                name={organ.name}
                icon={organ.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Tests Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <div className="inline-block py-1 px-3 bg-amedico-teal/10 text-amedico-teal rounded-full text-sm font-medium mb-4">
                TOP TESTS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-amedico-text">
                Top Common Tests
              </h2>
            </div>
            <div className="flex mt-4 md:mt-0">
              <button className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors mr-2">
                <ArrowRight size={20} className="transform rotate-180" />
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTests.map((test) => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/tests"
              className="inline-flex items-center px-6 py-3 border border-amedico-teal text-amedico-teal font-medium rounded-md hover:bg-amedico-teal hover:text-white transition-colors duration-300"
            >
              VIEW MORE TESTS
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amedico-text mb-4">
              Why Choose Amedico
            </h2>
            <p className="text-gray-600">
              We offer comprehensive diagnostic services with precision and care to ensure your optimal health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
              <div className="w-14 h-14 bg-amedico-teal/10 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-7 w-7 text-amedico-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accurate Results</h3>
              <p className="text-gray-600">
                Our state-of-the-art laboratory equipment ensures precise and reliable test results.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="w-14 h-14 bg-amedico-teal/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-amedico-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                Our compassionate staff prioritizes your comfort and privacy throughout the testing process.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="w-14 h-14 bg-amedico-teal/10 rounded-full flex items-center justify-center mb-4">
                <Scale className="h-7 w-7 text-amedico-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Testing</h3>
              <p className="text-gray-600">
                From basic screenings to advanced diagnostics, we offer a wide range of tests for complete health assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
