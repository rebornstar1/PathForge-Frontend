'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {logoimg} from "../../public/logopathforge.png"
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/jobs', label: 'Jobs' },
    { href: '/learn', label: 'Learn' },
    { href: '/resume', label: 'Resume' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isActiveLink = (href) => pathname === href;

  return (
    <header className="bg-gradient-to-r from-blue-300 via-slate-100 to-blue-100 text-gray-700 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoimg} // Replace with actual logo path
              alt="Platform Logo"
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold text-gray-900">Pathforge</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 text-base font-medium transition-colors duration-200 hover:text-indigo-600 ${
                isActiveLink(link.href) ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call-to-Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className="hidden md:inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition duration-200"
          >
            Log In
          </Link>
          <Link
            href="/sign-up"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition duration-200"
          >
            Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition duration-200"
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col p-6 space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActiveLink(link.href) ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Link
                href="/login"
                className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-center font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition duration-200"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="block w-full rounded-lg bg-indigo-600 px-4 py-2 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 transition duration-200"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
