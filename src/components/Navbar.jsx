import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-cream/80 backdrop-blur-sm border-b border-sage/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="text-sage-dark" size={22} fill="currentColor" />
          <span className="font-serif text-xl text-sage-dark">AfterCare AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-warm-gray font-medium text-sm">
          <a href="#features" className="hover:text-sage-dark transition">Features</a>
          <a href="#how" className="hover:text-sage-dark transition">How it works</a>
        </div>
        <Link to="/upload" className="bg-sage-dark text-cream px-5 py-2 rounded-full text-sm font-medium hover:bg-sage transition">
            Get Started
        </Link>
      </div>
    </nav>
  )
}