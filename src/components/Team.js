import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Lead AI Developer",
      bio: "10+ years in AI/ML with expertise in automation and intelligent systems.",
      avatar: "/images/team-1.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Maria Garcia",
      role: "Full-Stack Developer",
      bio: "Expert in React, Node.js, and modern web technologies with 8+ years experience.",
      avatar: "/images/team-2.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      role: "Mobile Developer",
      bio: "Specialized in React Native and native iOS/Android development.",
      avatar: "/images/team-3.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sophie Chen",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design and modern interfaces.",
      avatar: "/images/team-4.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented professionals behind our AI-powered development solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    <a 
                      href={member.social.linkedin} 
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                    <a 
                      href={member.social.github} 
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;