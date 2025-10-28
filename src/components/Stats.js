import React from 'react';

const Stats = () => {
  const stats = [
    { value: '92%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30k+', label: 'Lines of Code' },
    { value: '100%', label: 'On-Time Delivery' }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;