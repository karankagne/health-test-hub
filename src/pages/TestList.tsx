
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestCard from '@/components/TestCard';
import { tests, getTestsByCategory, TestCategory } from '@/lib/testData';
import { Search, Filter } from 'lucide-react';

type CategoryTab = {
  id: TestCategory;
  label: string;
};

const categoryTabs: CategoryTab[] = [
  { id: 'blood', label: 'Blood Tests' },
  { id: 'urine', label: 'Urine Tests' },
  { id: 'ecg', label: 'ECG & Related Tests' },
];

const TestList = () => {
  const { category = 'blood' } = useParams<{ category?: string }>() as { category?: TestCategory };
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<TestCategory>(category);
  const [sortOption, setSortOption] = useState('name-asc');

  const handleCategoryChange = (category: TestCategory) => {
    setActiveCategory(category);
  };

  const filteredTests = getTestsByCategory(activeCategory).filter(
    (test) => test.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTests = [...filteredTests].sort((a, b) => {
    if (sortOption === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    if (sortOption === 'price-asc') {
      return a.price - b.price;
    }
    if (sortOption === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 bg-amedico-teal text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              {activeCategory === 'blood' && 'Blood Tests'}
              {activeCategory === 'urine' && 'Urine Tests'}
              {activeCategory === 'ecg' && 'ECG & Related Tests'}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl animate-fade-in-up">
              {activeCategory === 'blood' && 'Comprehensive blood tests to assess your health and identify potential issues.'}
              {activeCategory === 'urine' && 'Accurate urine analysis to detect infections and monitor kidney function.'}
              {activeCategory === 'ecg' && 'Advanced cardiac tests to evaluate heart health and function.'}
            </p>
          </div>
        </div>
        <div className="h-16 bg-white rounded-t-[50px] md:rounded-t-[100px]"></div>
      </div>
      
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                className={cn(
                  'px-4 py-2 rounded-full transition-colors',
                  activeCategory === tab.id 
                    ? 'bg-amedico-teal text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
                onClick={() => handleCategoryChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Search and Filter Row */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search tests..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:border-amedico-teal focus:ring focus:ring-amedico-teal/20 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <select
                className="py-2 px-4 border border-gray-300 rounded-md focus:border-amedico-teal focus:ring focus:ring-amedico-teal/20 focus:outline-none appearance-none bg-white"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
            </div>
          </div>
          
          {/* Test Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sortedTests.length > 0 ? (
              sortedTests.map((test) => (
                <TestCard 
                  key={test.id} 
                  test={test} 
                />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No tests found</h3>
                <p className="text-gray-500">
                  {searchQuery 
                    ? 'Try adjusting your search criteria.' 
                    : 'There are no tests in this category at the moment.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TestList;
