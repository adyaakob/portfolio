import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../ui/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900 print:py-4">
      <div className="container mx-auto px-4 print:px-0">
        <h2 className="text-3xl font-bold text-center mb-8 print:mb-4">Get In Touch</h2>
        
        {/* Social Links - Hidden in print */}
        <div className="flex justify-center gap-6 mb-12 print:hidden">
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

        {/* Print-only contact info */}
        <div className="hidden print:block print:mb-0 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-2xl mx-auto">
            <p className="text-sm">Email: adyaakob@gmail.com</p>
            <p className="text-sm">LinkedIn: linkedin.com/in/ahmaddahalan</p>
            <p className="text-sm">GitHub: github.com/adyaakob</p>
          </div>
        </div>

        {/* Contact Form - Hidden in print */}
        <div className="max-w-md mx-auto print:hidden">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}