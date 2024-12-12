'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactForm from './ContactForm';

interface ContactProps {
  className?: string;
}

export default function Contact({ className = '' }: ContactProps) {
  return (
    <section id="contact" className={`${className} py-16 bg-gray-50 dark:bg-gray-900`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://github.com/YOUR_USERNAME" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/YOUR_USERNAME" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-2xl hover:text-primary transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}