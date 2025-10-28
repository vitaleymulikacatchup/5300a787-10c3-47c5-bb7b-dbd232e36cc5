import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { name: 'nestjs', color: 'text-red-500' },
    { name: 'mysql', color: 'text-blue-500' },
    { name: 'mongodb', color: 'text-green-500' },
    { name: 'nginx', color: 'text-green-600' },
    { name: 'redis', color: 'text-red-600' },
    { name: 'typescript', color: 'text-blue-600' }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">AI-powered</span>
                <br />
                <span className="text-gray-900">web and mobile</span>
                <br />
                <span className="gradient-text">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">Powered by</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Discovery
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                Portfolio Showcase
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-blue-600 font-semibold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-gray-800 font-semibold">@</span>
                </a>
                <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-white font-semibold">W</span>
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500">We use cookies</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    <span className={`w-2 h-2 rounded-full ${tech.color.replace('text-', 'bg-')}`}></span>
                    #{tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 3D Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full opacity-30"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full opacity-40"></div>
                <div className="absolute inset-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-50"></div>
                <div className="absolute inset-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full opacity-60"></div>
                
                {/* Interwoven rings effect */}
                <div className="absolute inset-0 border-4 border-gray-300 rounded-full transform rotate-12 opacity-70"></div>
                <div className="absolute inset-6 border-4 border-gray-400 rounded-full transform -rotate-12 opacity-60"></div>
                <div className="absolute inset-12 border-4 border-gray-500 rounded-full transform rotate-45 opacity-50"></div>
                <div className="absolute inset-18 border-4 border-gray-600 rounded-full transform -rotate-45 opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;