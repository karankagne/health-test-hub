
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
    imageUrl: "/lab-equipment.jpg",
    title: "State-of-the-Art Equipment",
    description: "Our labs are equipped with the latest diagnostic technology for accurate results."
  },
  {
    id: 2,
    imageUrl: "/lab-technician.jpg",
    title: "Expert Technicians",
    description: "Our team of certified lab technicians ensures precise sample processing."
  },
  {
    id: 3,
    imageUrl: "/lab-interior.jpg",
    title: "Modern Facilities",
    description: "Clean, comfortable environments designed for patient convenience."
  },
  {
    id: 4,
    imageUrl: "/sample-collection.jpg",
    title: "Careful Sample Collection",
    description: "Gentle, professional sample collection with minimal discomfort."
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
            Explore Our Modern Labs
          </h2>
          <p className="text-gray-600">
            Take a virtual tour of our state-of-the-art laboratory facilities and equipment.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {labImages.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="overflow-hidden border-none shadow-md">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-white text-xl font-semibold mb-1">{item.title}</h3>
                          <p className="text-white/90 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative static rounded-full" />
            <CarouselNext className="relative static rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default LabCarousel;
