
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
    imageUrl: "/lovable-uploads/c842e8fd-92c8-4d3e-8429-9ae26be0e83e.png",
    title: "Advanced Laboratory Setup",
    description: "State-of-the-art laboratory equipment for precision diagnostics and research."
  },
  {
    id: 2,
    imageUrl: "/lovable-uploads/938a157c-eeb8-4494-aafe-d10c99376e4d.png",
    title: "Controlled Environment Testing",
    description: "Our technicians follow strict protocols in controlled environments for accurate results."
  },
  {
    id: 3,
    imageUrl: "/lovable-uploads/fffb1f1a-3adf-405a-a96f-522d9e5e14d9.png",
    title: "Advanced Diagnostic Analysis",
    description: "Expert professionals analyzing test results with cutting-edge monitoring systems."
  },
  {
    id: 4,
    imageUrl: "/lovable-uploads/c86758ec-3ce9-4747-943c-0f90484cf566.png",
    title: "Precision Testing Equipment",
    description: "Modern microscopy and analytical instruments for detailed sample examination."
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
                        onError={(e) => {
                          console.error(`Failed to load image: ${item.imageUrl}`);
                          e.currentTarget.src = "/placeholder.svg";
                        }}
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
