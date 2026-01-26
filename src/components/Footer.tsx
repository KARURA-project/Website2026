import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiMapPin, FiPhone, FiInstagram, FiTwitter, FiLinkedin} from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-white font-bold text-xl">KARURA</h3>
            </div>
            <p className="text-sm leading-relaxed">
              KARURA is an international Mars rover team uniting students from Texas A&M University and universities across Japan to advance space exploration technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/rover" className="hover:text-white transition-colors duration-200">
                  The Rover
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-white transition-colors duration-200">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Departments</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/departments/mechanical" className="hover:text-white transition-colors duration-200">
                  Mechanical
                </Link>
              </li>
              <li>
                <Link href="/departments/electrical" className="hover:text-white transition-colors duration-200">
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/departments/software" className="hover:text-white transition-colors duration-200">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/departments/science" className="hover:text-white transition-colors duration-200">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/departments/business" className="hover:text-white transition-colors duration-200">
                  Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-red-500 flex-shrink-0" size={18} />
                <div>
                  <p className="text-sm">General Inquiries:</p>
                  <a 
                    href="mailto:example@example.com" 
                    className="hover:text-white transition-colors duration-200"
                  >
                    example@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-red-500 flex-shrink-0" size={18} />
                <div>
                  <p className="text-sm">Website Questions:</p>
                  <a 
                    href="mailto:doethan@tamu.edu" 
                    className="hover:text-white transition-colors duration-200"
                  >
                    doethan@tamu.edu
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-red-500 flex-shrink-0" size={18} />
                <div>
                  <p className="text-sm">Texas A&M University</p>
                  <p className="text-sm">College Station, TX 77843</p>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/karura_project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FiInstagram size={24} />
                </a>

                <a
                  href="https://twitter.com/karura_project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <FiTwitter size={24} />
                </a>

                <a
                  href="https://linkedin.com/company/karura-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </div> {/* Contact Information */}
        </div> {/* Grid */}
      </div> {/* Main Footer Content */}

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} KARURA Project. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>);}
