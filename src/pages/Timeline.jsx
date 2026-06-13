import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ChevronDown, ArrowRight } from 'lucide-react'

const deadlines = [
  {
    title: 'Report death to bank within 7 days',
    due: 'Due in 4 days',
    urgency: 'high',
    why: 'Banks freeze unreported accounts to prevent fraud, but unreported accounts also remain vulnerable to identity theft. Reporting early protects the estate and starts the closure process.',
  },
  {
    title: 'File insurance claim intimation',
    due: 'Due in 12 days',
    urgency: 'high',
    why: 'Most insurers require claim intimation within 30 days of death. Missing this can delay payout by months or, in rare cases, result in claim rejection.',
  },
  {
    title: 'Apply for succession certificate',
    due: 'Due in 45 days',
    urgency: 'medium',
    why: 'Required to legally transfer property and large financial assets. Courts can take weeks to process this, so starting early avoids bottlenecks later.',
  },
  {
    title: 'Cancel active subscriptions',
    due: 'Due in 60 days',
    urgency: 'low',
    why: 'Not legally urgent, but unused subscriptions continue billing the deceased\'s linked accounts or cards, which can cause confusion during estate settlement.',
  },
]

const urgencyDot = {
  high: 'bg-red-400',
  medium: 'bg-accent',
  low: 'bg-sage',
}

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-warm-gray">
      <div className="text-center mb-10">
        <p className="text-sage-dark font-medium mb-2 tracking-wide text-sm uppercase">Your Timeline</p>
        <h1 className="font-serif text-3xl md:text-4xl text-sage-dark mb-3">
          What needs to happen, and when
        </h1>
        <p className="max-w-xl mx-auto leading-relaxed">
          No legal jargon — just what matters, in the order it matters.
        </p>
      </div>

      <div className="space-y-3 mb-12">
        {deadlines.map((item, index) => (
          <div key={index} className="bg-white/60 border border-sage/20 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${urgencyDot[item.urgency]}`} />
                <div>
                  <p className="font-medium text-sage-dark">{item.title}</p>
                  <p className="text-sm flex items-center gap-1 mt-1">
                    <Clock size={14} /> {item.due}
                  </p>
                </div>
              </div>
              <ChevronDown size={20} className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-sm leading-relaxed border-t border-sage/10 pt-4">
                <span className="font-medium text-sage-dark">Why this matters: </span>
                {item.why}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/family" className="bg-sage-dark text-cream px-8 py-4 rounded-full font-medium text-lg hover:bg-sage transition inline-flex items-center gap-2">
          Invite family members
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  )
}