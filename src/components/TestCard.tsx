
import React from 'react';
import { cn } from '@/lib/utils';
import { Test } from '@/lib/testData';
import { Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface TestCardProps {
  test: Test;
}

const TestCard = ({ test }: TestCardProps) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleBookTest = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If user is logged in, go directly to appointment form
    if (currentUser) {
      navigate(`/appointment/${test.id}`);
    } else {
      // If not logged in, redirect to login page with redirect URL
      navigate(`/login?redirect=/appointment/${test.id}`);
    }
  };

  return (
    <div className="test-card animate-fade-in-up border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-lg p-5">
      <h3 className="text-lg md:text-xl font-medium text-gray-800">{test.name}</h3>
      
      <div className="mt-3 space-y-2">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Info:</span>
          <p>{test.preparation || 'No special preparation required.'}</p>
        </div>
        
        <div className="text-sm text-gray-600">
          <span className="font-medium">Report Delivery:</span>
          <p>{test.reportDelivery || 'Same day'}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-end justify-between">
        <div>
          <span className="text-2xl font-bold text-blue-600">₹ {test.price.toLocaleString()}</span>
        </div>
        
        <div className="flex space-x-2">
          <Link 
            to={`/test/${test.id}`}
            className="btn-outline py-2 px-4 border border-gray-300 rounded-md transition-colors hover:bg-gray-100"
          >
            View More
          </Link>
          
          <button
            onClick={handleBookTest}
            className="btn-primary py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            <span>Book test</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
