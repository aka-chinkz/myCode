import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [activeLink, setActivelink] = useState('#home')

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Our Services' },
    { href: '#testimonials', label: 'Testimonials' },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/*logo*/}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full -ml-2 opacity-100 hover:opacity-75 transition-opacity"></div>
        </div>
        {/*mobile menu button */}
        <button
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>
        {/*destop navitems*/}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActivelink(link.href)}
              className={`text-sm font-medium relative
        after:absolute after:bottom-0 after:left-0 after:h-0.5
        after:bg-blue-600 after:transition-all after:duration-300
        ${
          activeLink === link.href
            ? 'text-blue-600 after:w-full'
            : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'
        }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/*button*/}
        <button
          className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm
        font-medium transition-all hover-shadow-lg hover:shadow-blue-100 "
        >
          <a href="#news">Get in touch</a>
        </button>
      </div>
      {/*mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                onClick={() => {
                  setActivelink(link.href)
                  setisMenuOpen(false)
                }}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? 'text-blue-600'
                    : 'text-gray-600  hover:text-gray-900'
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <button
              className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm
        font-medium transition-all hover-shadow-lg hover:shadow-blue-100 "
            >
              <a href="#news">Get in touch</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
