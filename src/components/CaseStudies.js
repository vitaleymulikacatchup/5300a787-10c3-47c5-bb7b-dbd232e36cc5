import React from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Discover how we've helped businesses transform their digital presence with AI-powered solutions.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 text-white">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Dios</h3>
                  <p className="text-blue-100 mb-6">
                    A comprehensive digital platform that revolutionized customer engagement and streamlined business operations through AI-powered automation.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold">$2,500</div>
                    <div className="text-blue-100">Project Value</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-blue-100">Weeks</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">AI/ML</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>

                <button className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="p-8 lg:p-12 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Dashboard Overview</h4>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">85%</div>
                        <div className="text-sm text-gray-600">Efficiency</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-8 bg-blue-500 rounded"></div>
                      <div className="h-8 bg-purple-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;