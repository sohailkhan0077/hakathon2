import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-6">
          {/* Address Section */}
          <div>
            <address className="text-gray-600 not-italic">
              400 University Drive Suite 200 Coral<br />
              Gables,<br />
              FL 33134 USA
            </address>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-gray-700 font-medium mb-4">Links</h4>
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-gray-900 hover:text-gray-500">Shop</Link>
              <Link href="#" className="text-gray-900 hover:text-gray-500">Home</Link>
              <Link href="#" className="text-gray-900 hover:text-gray-500">About</Link>
              <Link href="#" className="text-gray-900 hover:text-gray-500">Contact</Link>
            </nav>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="text-gray-600 font-medium mb-4">Help</h4>
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-gray-900 hover:text-gray-500">Payment Options</Link>
              <Link href="#" className="text-gray-900 hover:text-gray-500">Returns</Link>
              <Link href="#" className="text-gray-900 hover:text-gray-500">Privacy Policies</Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-grow border-b border-gray-300 pb-1 focus:outline-none focus:border-gray-600"
              />
              <button
                type="submit"
                className="text-gray-900 hover:text-gray-600 border-b border-gray-950"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-start">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;