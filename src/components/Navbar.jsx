import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/upload', label: 'Get Started' },
  ]

  return (
    <nav className="bg-cream/80 backdrop-blur-sm border-b border-sage/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="text-sage-dark" size={22} fill="currentColor" />
          <span className="font-serif text-xl text-sage-dark">AfterCare AI</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-warm-gray font-medium text-sm items-center">
          <a href="/#features" className="hover:text-sage-dark transition">Features</a>
          <a href="/#how" className="hover:text-sage-dark transition">How it works</a>
          <Link
            to="/upload"
            className="bg-sage-dark text-cream px-5 py-2 rounded-full text-sm font-medium hover:bg-sage hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-sage-dark" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-warm-gray font-medium text-sm animate-fade-in">
          <a href="/#features" onClick={() => setOpen(false)} className="hover:text-sage-dark transition">Features</a>
          <a href="/#how" onClick={() => setOpen(false)} className="hover:text-sage-dark transition">How it works</a>
          <Link
            to="/upload"
            onClick={() => setOpen(false)}
            className="bg-sage-dark text-cream px-5 py-2 rounded-full text-sm font-medium text-center hover:bg-sage transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}