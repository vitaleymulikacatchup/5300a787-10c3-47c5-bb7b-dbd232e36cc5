import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Sargas</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI-powered web and mobile development solutions delivered in 12 weeks.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#case-studies" className="text-gray-600 hover:text-primary-600 transition-colors">Case Studies</a></li>
              <li><a href="#blog" className="text-gray-600 hover:text-primary-600 transition-colors">Blog</a></li>
              <li><a href="#contacts" className="text-gray-600 hover:text-primary-600 transition-colors">Contacts</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-primary-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#web-development" className="text-gray-600 hover:text-primary-600 transition-colors">Web Development</a></li>
              <li><a href="#mobile-development" className="text-gray-600 hover:text-primary-600 transition-colors">Mobile Development</a></li>
              <li><a href="#support" className="text-gray-600 hover:text-primary-600 transition-colors">Support and Maintenance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Feel free to drop us a note:</div>
                <div className="text-sm font-medium text-primary-600">contact@sargas.io</div>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Connect with us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            © 2024 Sargas. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-gray-500 hover:text-primary-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-500 hover:text-primary-600 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;