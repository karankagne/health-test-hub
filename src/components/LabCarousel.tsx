
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Images and descriptions for the slideshow
const labImages = [
  {
    id: 1,
    imageUrl: "/lovable-uploads/5bf1d84a-c978-47a4-aebf-983e93787bc8.png",
    title: "Precision Lab Equipment",
    description: "Advanced diagnostic tools and equipment for accurate testing and analysis."
  },
  {
    id: 2,
    imageUrl: "/lovable-uploads/1563dea9-0534-43a2-8422-c34b95487bc7.png",
    title: "Expert Technicians",
    description: "Our skilled technicians handle samples with utmost precision and care."
  },
  {
    id: 3,
    imageUrl: "/lovable-uploads/fe1b4eb5-5935-44b3-ad8c-72934b156514.png",
    title: "Modern Laboratory Facilities",
    description: "State-of-the-art laboratory with controlled environment for accurate results."
  },
  {
    id: 4,
    imageUrl: "/lovable-uploads/4311aa92-12d5-4c25-be5f-498ccea01e08.png",
    title: "Careful Sample Analysis",
    description: "Meticulous examination of samples using advanced microscopy techniques."
  }
];

const LabCarousel = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-10">
          <div className="inline-block py-1 px-3 bg-amedico-teal/10 text-amedico-teal rounded-full text-sm font-medium mb-4">
            OUR FACILITIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-amedico-text mb-4">
            Advanced Diagnostic Laboratories
          </h2>
          <p className="text-gray-600">
            Take a glimpse into our cutting-edge laboratory facilities where precision meets care.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {labImages.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2 p-1">
                <Card className="overflow-hidden border-none shadow-lg rounded-xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-72 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-white/90 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative static rounded-full bg-amedico-teal text-white hover:bg-amedico-teal/90 border-none" />
            <CarouselNext className="relative static rounded-full bg-amedico-teal text-white hover:bg-amedico-teal/90 border-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default LabCarousel;
