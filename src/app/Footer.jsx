'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = 2024

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Brand Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Pathforge</h2>
            <p className="text-gray-400">Assess, Grow and Learn</p>
          </div>

          {/* Navigation Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[ 
                { Icon: FaFacebook, href: 'https://facebook.com', color: 'hover:text-blue-600' },
                { Icon: FaInstagram, href: 'https://instagram.com', color: 'hover:text-pink-600' },
                { Icon: FaLinkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
                { Icon: FaTwitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
                { Icon: FaGithub, href: 'https://github.com', color: 'hover:text-gray-400' },
              ].map(({ Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${color} transition-colors duration-300`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} MyBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
