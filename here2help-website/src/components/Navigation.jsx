import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Heart, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Technology', href: '#technology' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Team', href: '#team' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--here2help-purple)'}}>
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold" style={{color: 'var(--here2help-purple)'}}>
              Here2help
            </span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <Button 
              className="text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              style={{backgroundColor: 'var(--here2help-orange)'}}
              onClick={() => scrollToSection('#about')}
            >
              Learn More
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{color: 'var(--here2help-purple)'}} />
            ) : (
              <Menu className="w-6 h-6" style={{color: 'var(--here2help-purple)'}} />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="text-white font-semibold px-6 py-2 rounded-full shadow-md mt-4 w-full"
                style={{backgroundColor: 'var(--here2help-orange)'}}
                onClick={() => scrollToSection('#about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

