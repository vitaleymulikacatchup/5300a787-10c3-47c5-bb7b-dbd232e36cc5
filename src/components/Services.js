import React from 'react';
import { Globe, Phone } from 'lucide-react';

const Services = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Web Development */}
          <div className="text-center space-y-8">
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <div className="flex justify-center mb-8">
                <div className="relative w-64 h-48">
                  {/* Web development illustration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 w-6 h-6 bg-red-500 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold">JS</span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-green-500 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 max-w-md mx-auto">
                Custom web applications built with modern technologies and AI-powered development processes.
              </p>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="text-center space-y-8">
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MOBILE DEVELOPMENT</h3>
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-56">
                  {/* Mobile phone illustration */}
                  <div className="absolute inset-0 bg-gray-800 rounded-2xl">
                    <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-xl">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full"></div>
                      <div className="absolute top-6 left-2 right-2 h-8 bg-blue-500 rounded"></div>
                      <div className="absolute top-16 left-2 right-2 h-4 bg-gray-200 rounded"></div>
                      <div className="absolute top-22 left-2 right-2 h-4 bg-gray-200 rounded"></div>
                      <div className="absolute bottom-4 left-2 right-2 h-8 bg-green-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 max-w-md mx-auto">
                Native and cross-platform mobile applications for iOS and Android with seamless user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Get the same high-quality service for a smaller task
            </h3>
            <button className="btn-primary">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;