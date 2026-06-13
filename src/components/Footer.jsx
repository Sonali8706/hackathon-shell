import { Heart, Lock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-sage/20 bg-white/40 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Heart className="text-sage-dark" size={18} fill="currentColor" />
          <span className="font-serif text-lg text-sage-dark">AfterCare AI</span>
        </div>
        <p className="text-sm text-warm-gray flex items-center gap-2">
          <Lock size={14} />
          Your documents are processed securely and never shared without consent.
        </p>
        <p className="text-xs text-warm-gray/60">Built for Vibeathon 2026</p>
      </div>
    </footer>
  )
}