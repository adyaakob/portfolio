'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    error: false,
    success: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: false, success: false });

    try {
      await emailjs.send(
        'service_2wl7mdb', // Your Service ID
        'template_46pkuy7', // Your Template ID
        formData,
        'ARDvZHgP6vTDWLrtx'  // Your Public Key
      );

      setStatus({ loading: false, error: false, success: true });
      setFormData({ from_name: '', from_email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ loading: false, error: true, success: false });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
          disabled={status.loading}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-100
            border-gray-300 dark:border-gray-600
            focus:border-purple-500 dark:focus:border-purple-500
            outline-none"
        />
      </div>

      <div>
        <label htmlFor="from_email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
          disabled={status.loading}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-100
            border-gray-300 dark:border-gray-600
            focus:border-purple-500 dark:focus:border-purple-500
            outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status.loading}
          rows={4}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-100
            border-gray-300 dark:border-gray-600
            focus:border-purple-500 dark:focus:border-purple-500
            outline-none"
        />
      </div>

      {status.error && (
        <div className="text-red-600 dark:text-red-400 text-sm">
          Failed to send message. Please try again later.
        </div>
      )}

      {status.success && (
        <div className="text-green-600 dark:text-green-400 text-sm">
          Message sent successfully!
        </div>
      )}

      <button
        type="submit"
        disabled={status.loading}
        className={`w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 
          dark:bg-purple-500 dark:hover:bg-purple-600 text-white py-2.5 px-4 rounded-md 
          transition-colors duration-200 font-medium
          ${status.loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700 dark:hover:bg-purple-600'}
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900`}
      >
        {status.loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}