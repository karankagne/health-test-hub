
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { tests, getTestById } from '@/lib/testData';

// Form schema
const appointmentFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  date: z.string().min(1, { message: "Please select a date." }),
  time: z.string().min(1, { message: "Please select a time." }),
  visitType: z.enum(["home", "center"], { 
    required_error: "Please select a visit type." 
  }),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

const BookTest = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const testId = searchParams.get('testId');
  const [selectedTest, setSelectedTest] = useState<string | null>(testId);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(selectedTest ? "booking" : "tests");

  const defaultValues: Partial<AppointmentFormValues> = {
    visitType: "center",
  };

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues,
  });

  const onSubmit = (data: AppointmentFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Appointment booked successfully!",
      description: "You will receive a confirmation email shortly.",
    });
  };

  // Group tests by category
  const bloodTests = tests.filter(test => test.category === 'blood');
  const urineTests = tests.filter(test => test.category === 'urine');
  const ecgTests = tests.filter(test => test.category === 'ecg');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 bg-amedico-teal text-white">
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
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="tests">Select Tests</TabsTrigger>
              <TabsTrigger value="booking" disabled={!selectedTest}>Book Appointment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tests" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="text-amedico-teal" />
                  Blood Tests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bloodTests.map(test => (
                    <div 
                      key={test.id}
                      className={cn(
                        "p-4 border rounded-lg cursor-pointer transition-all",
                        selectedTest === test.id 
                          ? "border-amedico-teal bg-amedico-teal/5" 
                          : "border-gray-200 hover:border-amedico-teal/50"
                      )}
                      onClick={() => setSelectedTest(test.id)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-amedico-text">{test.name}</h3>
                        <span className="font-semibold text-amedico-teal">₹{test.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{test.preparation || 'No special preparation required'}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="text-amedico-teal" />
                  Urine Tests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {urineTests.map(test => (
                    <div 
                      key={test.id}
                      className={cn(
                        "p-4 border rounded-lg cursor-pointer transition-all",
                        selectedTest === test.id 
                          ? "border-amedico-teal bg-amedico-teal/5" 
                          : "border-gray-200 hover:border-amedico-teal/50"
                      )}
                      onClick={() => setSelectedTest(test.id)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-amedico-text">{test.name}</h3>
                        <span className="font-semibold text-amedico-teal">₹{test.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{test.preparation || 'No special preparation required'}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="text-amedico-teal" />
                  ECG & Related Tests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ecgTests.map(test => (
                    <div 
                      key={test.id}
                      className={cn(
                        "p-4 border rounded-lg cursor-pointer transition-all",
                        selectedTest === test.id 
                          ? "border-amedico-teal bg-amedico-teal/5" 
                          : "border-gray-200 hover:border-amedico-teal/50"
                      )}
                      onClick={() => setSelectedTest(test.id)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-amedico-text">{test.name}</h3>
                        <span className="font-semibold text-amedico-teal">₹{test.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{test.preparation || 'No special preparation required'}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {selectedTest && (
                <div className="flex justify-center mt-8">
                  <Button 
                    onClick={() => setActiveTab("booking")}
                    className="bg-amedico-teal hover:bg-amedico-dark-teal"
                  >
                    Continue to Book Appointment
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="booking">
              {!isLoggedIn ? (
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border">
                  <h2 className="text-2xl font-bold mb-6 text-center text-amedico-text">Log In to Continue</h2>
                  <p className="text-gray-600 mb-6 text-center">
                    Please log in to your account to book an appointment.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                    <Button 
                      className="w-full bg-amedico-teal hover:bg-amedico-dark-teal"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Log In
                    </Button>
                    <div className="text-center">
                      <span className="text-gray-600">Don't have an account?</span>{" "}
                      <Link to="/signup" className="text-amedico-teal hover:underline">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-lg border shadow-sm">
                      <h2 className="text-xl font-semibold mb-6">Appointment Details</h2>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="fullName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input placeholder="john@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your phone number" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Address</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your address" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="date"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Preferred Date</FormLabel>
                                  <FormControl>
                                    <Input type="date" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="time"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Preferred Time</FormLabel>
                                  <FormControl>
                                    <Input type="time" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="visitType"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel>Visit Type</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="center" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Visit Diagnostic Center
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="home" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Home Sample Collection
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button 
                            type="submit"
                            className="w-full bg-amedico-teal hover:bg-amedico-dark-teal"
                          >
                            Confirm Booking
                          </Button>
                        </form>
                      </Form>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-white p-6 rounded-lg border shadow-sm sticky top-24">
                      <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
                      
                      {selectedTest && getTestById(selectedTest) && (
                        <div className="space-y-4">
                          <div className="p-4 bg-amedico-teal/5 rounded-lg border border-amedico-teal/20">
                            <h3 className="font-medium text-amedico-text">
                              {getTestById(selectedTest)?.name}
                            </h3>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-gray-600">Test Price</span>
                              <span className="font-semibold">₹{getTestById(selectedTest)?.price}</span>
                            </div>
                          </div>
                          
                          <div className="border-t pt-4">
                            <div className="flex justify-between items-center font-semibold">
                              <span>Total Amount</span>
                              <span className="text-amedico-teal text-xl">₹{getTestById(selectedTest)?.price}</span>
                            </div>
                          </div>
                          
                          <div className="text-sm text-gray-600 space-y-2">
                            <p className="flex items-center gap-2">
                              <Clock size={16} />
                              Report Delivery: {getTestById(selectedTest)?.reportDelivery || 'Same day'}
                            </p>
                            <p className="flex items-center gap-2">
                              <MapPin size={16} />
                              Home collection available
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
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
