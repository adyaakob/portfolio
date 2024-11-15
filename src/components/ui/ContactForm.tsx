'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-100
            border-gray-300 dark:border-gray-600"
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
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-100
            border-gray-300 dark:border-gray-600"
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
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-100
            border-gray-300 dark:border-gray-600"
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
        className={`w-full bg-primary py-2 px-4 rounded-md transition-colors
          text-gray-900 dark:text-gray-100
          ${status.loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'}`}
      >
        {status.loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 