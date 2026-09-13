import React from "react";
import logoText from "../assets/logo-text.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-gray-100">
          <div className="md:col-span-2 space-y-4">
            <img
              src={logoText}
              alt="Dev Stack"
              className="h-7 w-auto object-contain"
            />
            <p className="text-sm text-gray-600 max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-600 text-sm"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-600 text-sm"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-600 text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#home" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-gray-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-gray-900">
                  products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#privacy" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Dev Stack, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-gray-800">
              Privacy
            </a>
            <a href="#terms" className="hover:text-gray-800">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
