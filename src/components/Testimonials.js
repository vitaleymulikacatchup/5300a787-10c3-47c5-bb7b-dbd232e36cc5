import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Sargas delivered an exceptional AI-powered solution that transformed our business operations. The 12-week timeline was met perfectly, and the quality exceeded our expectations.",
      rating: 5,
      avatar: "/images/avatar-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "The team's expertise in AI integration and modern web development is outstanding. They delivered a robust platform that scales beautifully with our growing business needs.",
      rating: 5,
      avatar: "/images/avatar-2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, GrowthLab",
      content: "Working with Sargas was a game-changer. Their AI-powered approach to development not only saved us time but also delivered features we didn't even know we needed.",
      rating: 5,
      avatar: "/images/avatar-3.jpg"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with our AI-powered development team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;