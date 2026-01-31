"use client";
import React, { useState } from 'react';
import ContactButton from '@/components/element/ContactButton';
import Entrance from '@/components/ui/Entrance';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='bg-[#F8F0E5] w-full min-h-screen px-8 md:px-20 pb-20'>
      <div className='flex flex-col pt-10 pb-16 md:pt-12 md:pb-20'>
        {/* Hero Section */}
        <Entrance>
          <div className='w-full mb-16'>
            <h1 className='text-5xl xl:text-[60px] leading-snug font-medium mb-6'>
              Get in Touch
            </h1>
          </div>
        </Entrance>

        {/* Main Content */}
        <Entrance>
          <div className='flex flex-col lg:flex-row w-full gap-12 lg:gap-16'>
            {/* Left Side - Contact Info */}
            <div className='lg:w-2/5'>
              <h2 className='text-lg font-medium text-gray-500 mb-6'>
                Contact Information
              </h2>
              <p className='leading-relaxed text-2xl lg:text-3xl font-medium text-gray-800 mb-8'>
                Interested in collaborating together? You can contact me on the links below and lets have conversation.
              </p>
              <ContactButton />
            </div>

            {/* Right Side - Contact Form */}
            <div className='lg:w-3/5'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                {/* Name Field */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='name' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='px-4 py-3 border border-gray-300 rounded-full focus:border-gray-900 focus:outline-none transition-colors bg-[#F8F0E5] text-gray-900'
                    placeholder='Your name'
                  />
                </div>

                {/* Email Field */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='email' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='px-4 py-3 border border-gray-300 rounded-full focus:border-gray-900 focus:outline-none transition-colors bg-[#F8F0E5] text-gray-900'
                    placeholder='your.email@example.com'
                  />
                </div>

                {/* Message Field */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='message' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='px-4 py-3 border border-gray-300 rounded-3xl focus:border-gray-900 focus:outline-none transition-colors bg-[#F8F0E5] text-gray-900 resize-none'
                    placeholder='Tell me about your project or just say hello...'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={status === 'sending'}
                  className='mt-4 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <p className='text-green-600 font-medium'>
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {status === 'error' && (
                  <p className='text-red-600 font-medium'>
                    Oops! Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </Entrance>
      </div>
    </div>
  );
};

export default ContactPage;
