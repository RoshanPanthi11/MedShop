'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-900 to-blue-950 text-white px-6 md:px-12 lg:px-20 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

        {/* Quick Links */}
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-4 text-cyan-300 border-b border-cyan-600 pb-1">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              { name: 'Home', href: '/' },
              { name: 'Shop', href: '/products' },
              { name: 'Categories', href: '/categories' },
              { name: 'Contact', href: '/contact' },
              { name: 'About Medishop', href: '/about' },
              { name: 'FAQ', href: '/faq' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative inline-block transition duration-200 hover:text-white"
                >
                  <span className="hover-underline">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Products */}
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-4 text-cyan-300 border-b border-cyan-600 pb-1">Popular Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Digital Thermometer</li>
            <li>BP Monitor</li>
            <li>Pulse Oximeter</li>
            <li>Medical Gloves</li>
            <li>Surgical Masks</li>
            <li>Portable Nebulizer</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-4 text-cyan-300 border-b border-cyan-600 pb-1">Customer Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Return & Refund Policy</li>
            <li>Shipping Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Payment Options</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-4 text-cyan-300 border-b border-cyan-600 pb-1">Contact Medishop</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: <a href="mailto:support@medishop.com" className="underline hover:text-white">support@medishop.com</a></li>
            <li>Phone: +977-01-1234567</li>
            <li>
              Address: <br />
              Health Plaza, Lazimpat<br />
              Kathmandu, Nepal
            </li>
          </ul>

          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" className="hover:text-cyan-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-cyan-800 mt-10 pt-6 text-center text-xs text-cyan-300 tracking-wide">
        &copy; {new Date().getFullYear()} Medishop. All rights reserved.
      </div>

      <style jsx>{`
        .hover-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background-color: #22d3ee;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .hover-underline:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
