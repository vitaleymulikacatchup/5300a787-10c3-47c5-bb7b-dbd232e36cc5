import React from 'react';
import { X } from 'lucide-react';

const CookieConsent = ({ onClose }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-semibold text-gray-900">This site uses cookies</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            We and selected third parties use cookies (or similar technologies) for 
            technical purposes, to enhance and analyze site usage, to support our 
            marketing efforts, and for other purposes described below.
          </p>
          
          <p className="text-sm text-gray-600 leading-relaxed">
            By clicking "Accept all", you agree to the storing of cookies on your 
            device for these purposes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={onClose}
              className="btn-outline flex-1 text-sm py-2"
            >
              Deny
            </button>
            <button 
              onClick={onClose}
              className="btn-secondary flex-1 text-sm py-2"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;