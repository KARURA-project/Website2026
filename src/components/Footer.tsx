import Link from 'next/link';
import { FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">KARURA</h3>
            <p className="text-gray-600 leading-relaxed">
              International Mars Rover Development Team bridging Japan and Texas A&M University.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-charcoal mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-charcoal transition-colors">About</Link></li>
              <li><Link href="/rover" className="text-gray-600 hover:text-charcoal transition-colors">Rover</Link></li>
              <li><Link href="/news" className="text-gray-600 hover:text-charcoal transition-colors">News</Link></li>
              <li><Link href="/support" className="text-gray-600 hover:text-charcoal transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-charcoal mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:zacharyrenkema@tamu.edu" className="flex items-center gap-3 text-gray-600 hover:text-charcoal transition-colors">
                <FiMail />
                <span>Email Us</span>
              </a>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-mars-red transition-colors">
                  <FiInstagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-mars-red transition-colors">
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {currentYear} KARURA Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
}