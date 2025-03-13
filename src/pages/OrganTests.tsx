
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestCard from '@/components/TestCard';
import { organTests, getTestsByOrgan } from '@/lib/testData';
import { ArrowLeft } from 'lucide-react';

const OrganTests = () => {
  const { organId } = useParams<{ organId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const organ = organTests.find(o => o.id === organId);
  const tests = getTestsByOrgan(organId || '');
  
  useEffect(() => {
    if (!organ) {
      navigate('/');
      return;
    }
    
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [organ, navigate]);
  
  if (!organ) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 bg-amedico-teal text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-md p-2 flex items-center justify-center">
                <img src={organ.icon} alt={organ.name} className="w-10 h-10 object-contain" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold animate-fade-in">
                {organ.name} Tests
              </h1>
            </div>
            <p className="text-lg opacity-90 max-w-2xl animate-fade-in-up">
              Comprehensive diagnostics to evaluate {organ.name.toLowerCase()} health and function with precision and care.
            </p>
          </div>
        </div>
        <div className="h-16 bg-white rounded-t-[50px] md:rounded-t-[100px]"></div>
      </div>
      
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="test-card animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="flex justify-between mt-4">
                    <div className="h-10 bg-gray-200 rounded w-24"></div>
                    <div className="flex gap-2">
                      <div className="h-10 bg-gray-200 rounded w-28"></div>
                      <div className="h-10 bg-gray-200 rounded w-28"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {tests.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {tests.map((test) => (
                    <TestCard 
                      key={test.id} 
                      test={test} 
                    />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No tests found</h3>
                  <p className="text-gray-500">
                    There are no tests available for this organ at the moment.
                  </p>
                  <Link 
                    to="/"
                    className="inline-block mt-4 px-6 py-3 bg-amedico-teal text-white rounded-md font-medium hover:bg-amedico-dark-teal transition-colors"
                  >
                    Return to Home
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OrganTests;
