'use client'

import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full px-6 py-4 border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center">
        
        {/* Brand */}
        <a href="#home" className="text-xl font-bold text-indigo-600">
          ArafahDev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
            Tentang
          </a>
          <a href="#services" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
            Layanan
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
            Harga
          </a>
          <a
            href="#contact"
            className="ml-4 bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700"
          >
            Konsultasi
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-gray-600"
          >
            Tentang
          </a>
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-gray-600"
          >
            Layanan
          </a>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-gray-600"
          >
            Harga
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
          >
            Konsultasi
          </a>
        </div>
      )}
    </nav>
  )
}