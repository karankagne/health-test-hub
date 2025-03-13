
import React from 'react';
import { cn } from '@/lib/utils';
import { Test } from '@/lib/testData';
import { Plus } from 'lucide-react';

interface TestCardProps {
  test: Test;
  onAddToCart?: () => void;
}

const TestCard = ({ test, onAddToCart }: TestCardProps) => {
  return (
    <div className="test-card animate-fade-in-up">
      <h3 className="text-lg md:text-xl font-medium text-amedico-text">{test.name}</h3>
      
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
          <span className="text-2xl font-bold text-amedico-teal">₹ {test.price.toLocaleString()}</span>
        </div>
        
        <div className="flex space-x-2">
          <button 
            className="btn-outline"
            onClick={() => {}}
          >
            View More
          </button>
          
          <button
            className="btn-primary flex items-center gap-2"
            onClick={onAddToCart}
          >
            <Plus className="h-4 w-4" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
