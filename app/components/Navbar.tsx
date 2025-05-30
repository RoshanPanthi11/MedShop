'use client'

import { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-800 shadow-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-extrabold text-teal-400 tracking-tight">MediShop</span>
            </Link>
          </div>

          {/* Search bar (hidden on small screens) */}
          <div className="hidden lg:block flex-1 mx-6">
            <input
              type="text"
              placeholder="Search medicines, supplies..."
              className="w-full px-4 py-2 border border-slate-600 rounded-full bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            />
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-white">
            <Link href="/" className="hover:text-teal-400 transition">Home</Link>

            {/* Shop Dropdown */}
            <div
              className="relative group"
            >
              <button className="hover:text-teal-400 transition">Shop</button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-slate-700 border border-slate-600 shadow-xl rounded-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                {['Medicines', 'Surgical Supplies', 'Diagnostics', 'Wellness'].map((item) => (
                  <Link
                    key={item}
                    href={`/category/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="block px-5 py-2 text-sm text-white hover:bg-slate-600 hover:text-teal-400 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/upload" className="hover:text-teal-400 transition">Upload Prescription</Link>
            <Link href="/contact" className="hover:text-teal-400 transition">Contact Us</Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-5 w-5 hover:text-teal-400 transition" />
              <span className="absolute -top-2 -right-2 text-xs bg-teal-500 text-white rounded-full px-1">2</span>
            </Link>
            <Link href="/login" className="hover:text-teal-400 transition">
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-slate-800 border-t border-slate-700 animate-slide-down text-white">
          <input
            type="text"
            placeholder="Search medicines..."
            className="w-full px-4 py-2 my-2 border border-slate-600 rounded-full bg-slate-700 text-white placeholder-slate-400"
          />
          <Link href="/" className="block py-2 border-b border-slate-700 hover:text-teal-400">Home</Link>
          <div className="border-b border-slate-700 py-2">
            <p className="font-medium">Shop</p>
            <div className="pl-4">
              {['Medicines', 'Surgical Supplies', 'Diagnostics', 'Wellness'].map((item) => (
                <Link
                  key={item}
                  href={`/category/${item.toLowerCase().replace(/ /g, '-')}`}
                  className="block py-1 text-sm hover:text-teal-400"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/upload" className="block py-2 border-b border-slate-700 hover:text-teal-400">Upload Prescription</Link>
          <Link href="/contact" className="block py-2 border-b border-slate-700 hover:text-teal-400">Contact Us</Link>
          <Link href="/cart" className="block py-2 border-b border-slate-700 hover:text-teal-400">Cart</Link>
          <Link href="/account" className="block py-2 hover:text-teal-400">Login / Signup</Link>
        </div>
      )}
    </header>
  );
}
