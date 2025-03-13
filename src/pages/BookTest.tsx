
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';
import { tests } from '@/lib/testData';
import { useAuth } from '@/contexts/AuthContext';

const BookTest = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const testId = searchParams.get('testId');
  const [selectedTest, setSelectedTest] = useState<string | null>(testId);
  const [activeTab, setActiveTab] = useState<string>(selectedTest ? "booking" : "tests");
  const { currentUser } = useAuth();

  // Group tests by category
  const bloodTests = tests.filter(test => test.category === 'blood');
  const urineTests = tests.filter(test => test.category === 'urine');
  const ecgTests = tests.filter(test => test.category === 'ecg');

  const handleBookAppointment = () => {
    if (!selectedTest) {
      toast({
        title: "No test selected",
        description: "Please select a test before booking",
      });
      return;
    }

    // Check if user is logged in
    if (!currentUser) {
      // Redirect to login page with return URL
      navigate(`/login?redirect=/appointment/${selectedTest}`);
    } else {
      // Redirect to appointment form
      navigate(`/appointment/${selectedTest}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Book A Test
            </h1>
            <p className="text-lg opacity-90 max-w-2xl animate-fade-in-up">
              Schedule your diagnostic test with ease. Select from our comprehensive range of tests and choose a convenient time for your appointment.
            </p>
          </div>
        </div>
        <div className="h-16 bg-white rounded-t-[50px] md:rounded-t-[100px]"></div>
      </div>
      
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 mb-8">
              <TabsTrigger value="tests">Select Tests</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tests" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600" />
                  Blood Tests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bloodTests.map(test => (
                    <div 
                      key={test.id}
                      className={cn(
                        "p-4 border rounded-lg cursor-pointer transition-all",
                        selectedTest === test.id 
                          ? "border-blue-600 bg-blue-50" 
                          : "border-gray-200 hover:border-blue-300"
                      )}
                      onClick={() => setSelectedTest(test.id)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800">{test.name}</h3>
                        <span className="font-semibold text-blue-600">₹{test.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{test.preparation || 'No special preparation required'}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600" />
                  Urine Tests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {urineTests.map(test => (
                    <div 
                      key={test.id}
                      className={cn(
                        "p-4 border rounded-lg cursor-pointer transition-all",
                        selectedTest === test.id 
                          ? "border-blue-600 bg-blue-50" 
                          : "border-gray-200 hover:border-blue-300"
                      )}
                      onClick={() => setSelectedTest(test.id)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800">{test.name}</h3>
                        <span className="font-semibold text-blue-600">₹{test.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{test.preparation || 'No special preparation required'}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600" />
                  ECG & Related Tests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ecgTests.map(test => (
                    <div 
                      key={test.id}
                      className={cn(
                        "p-4 border rounded-lg cursor-pointer transition-all",
                        selectedTest === test.id 
                          ? "border-blue-600 bg-blue-50" 
                          : "border-gray-200 hover:border-blue-300"
                      )}
                      onClick={() => setSelectedTest(test.id)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800">{test.name}</h3>
                        <span className="font-semibold text-blue-600">₹{test.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{test.preparation || 'No special preparation required'}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {selectedTest && (
                <div className="flex justify-center mt-8">
                  <Button 
                    onClick={handleBookAppointment}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Book Appointment
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookTest;
