import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../ui/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://github.com/adyaakob" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/ahmaddahalan/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:adyaakob@gmail.com"
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