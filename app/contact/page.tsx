'use client';
import React, { useState } from 'react';
import {  FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('आपला संदेश पाठवला गेला आहे! आम्ही लवकरच आपल्याशी संपर्क साधू.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-700" translate="no">
        आमच्याशी संपर्क साधा
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-red-600" translate="no">
            संपर्क माहिती
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-red-500 text-xl" />
              <div>
                <p className="font-semibold" translate="no">ईमेल</p>
                <p className="text-gray-600">kaliyugchakra@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <div>
                <p className="font-semibold" translate="no">पत्ता</p>
                <p className="text-gray-600" translate="no">
                  महाराष्ट्र, भारत
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-red-600" translate="no">
              सोशल मीडिया
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-black hover:text-gray-800 transition-colors">
                <FaXTwitter size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-red-600" translate="no">
            संदेश पाठवा
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" translate="no">
                नाव *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="आपले नाव"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" translate="no">
                ईमेल *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="आपला ईमेल पत्ता"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1" translate="no">
                विषय *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="संदेशाचा विषय"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1" translate="no">
                संदेश *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="आपला संदेश येथे लिहा"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors font-semibold"
              translate="no"
            >
              संदेश पाठवा
            </button>
          </form>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-red-600" translate="no">
          महत्वाची माहिती
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-2" translate="no">बातमी सुचवा</h3>
            <p translate="no">
              आपल्याकडे काही महत्वाची बातमी असल्यास आमच्याशी संपर्क साधा. 
              आम्ही त्याची पडताळणी करून प्रसारित करू.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2" translate="no">तक्रारी</h3>
            <p translate="no">
              कोणत्याही चुकीच्या माहितीबद्दल किंवा तांत्रिक समस्यांबद्दल 
              आपण आम्हाला कळवू शकता.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2" translate="no">सहकार्य</h3>
            <p translate="no">
              आमच्या टीममध्ये सामील होण्यासाठी किंवा सहकार्यासाठी 
              आपण आमच्याशी संपर्क साधू शकता.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;