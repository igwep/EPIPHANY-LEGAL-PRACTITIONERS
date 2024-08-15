import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Testimonials = () => {
  const testimonials = [
    {
        quote: "Epiphany Legal Practitioners helped me win my case with professionalism and expertise. Highly recommend!",
        name: "John Doe",
        case: "Civil Litigation"
      },
      {
        quote: "Outstanding service and dedication. They were with me every step of the way.",
        name: "Jane Smith",
        case: "Family Law"
      },
      {
        quote: "I couldn’t have asked for better representation. They truly care about their clients.",
        name: "Michael Johnson",
        case: "Corporate Law"
      }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-custom-primary mb-8">
          Testimonials
        </h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          className="custom-carousel" 
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white shadow-lg rounded-lg text-center">
              <p className="text-lg italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-bold text-custom-primary">{testimonial.name}</p>
              <p className="text-gray-600 text-sm">{testimonial.case}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
