import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Landmark, ShieldCheck, FileSignature, Repeat, AlertTriangle, ArrowRight, ChevronDown, CheckCircle2, Circle, Info } from 'lucide-react'

const initialItems = [
  {
    type: 'Bank Account', name: 'HDFC Savings Account', detail: 'Balance: ₹4,82,300', urgency: 'high', icon: Landmark,
    extra: 'Last transaction recorded on 1 May 2026. To close this account, the nominee must submit a death certificate, ID proof, and a closure request letter at the FC Road, Pune branch.',
  },
  {
    type: 'Insurance Policy', name: 'LIC Life Insurance', detail: 'Claim amount: ₹10,00,000', urgency: 'high', icon: ShieldCheck,
    extra: 'Policy was active with premiums paid until December 2025. Claim must be intimated to LIC within 30 days for fastest processing.',
  },
  {
    type: 'Property', name: 'Residential Flat, Pune', detail: 'Requires probate filing', urgency: 'medium', icon: FileSignature,
    extra: 'Mutation of property records is required before the flat can be sold or transferred. This involves the local Sub-Registrar office.',
  },
  {
    type: 'Subscription', name: 'Netflix, Spotify, Amazon Prime', detail: '3 active subscriptions found', urgency: 'low', icon: Repeat,
    extra: 'These were detected from recurring debit entries in the bank statement. Each can be cancelled directly from the respective app or via a closure email.',
  },
  {
    type: 'Dormant Account', name: 'SBI PPF Account', detail: 'Possibly forgotten — last activity 4 years ago', urgency: 'high', icon: AlertTriangle,
    extra: 'No deposits or withdrawals recorded in 4 years. Combined with RBI data showing ₹78,213 Cr in unclaimed deposits nationally, this is exactly the kind of account families lose track of.',
  },
]

const urgencyStyles = {
  high: 'border-red-300 bg-red-50 text-red-700',
  medium: 'border-accent/40 bg-accent/10 text-accent',
  low: 'border-sage/30 bg-sage/10 text-sage-dark',
}

const urgencyLabels = {
  high: 'Act this week',
  medium: 'Act this month',
  low: 'When you can',
}

export default function Mapper() {
  const [items, setItems] = useState(initialItems.map((item) => ({ ...item, resolved: false })))
  const [expandedIndex, setExpandedIndex] = useState(null)

  const resolvedCount = items.filter((i) => i.resolved).length
  const progress = Math.round((resolvedCount / items.length) * 100)

  function toggleResolved(index, e) {
    e.stopPropagation()
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, resolved: !item.resolved } : item)))
  }

  function toggleExpand(index) {
    setExpandedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-warm-gray animate-fade-in">
      <div className="text-center mb-8">
        <p className="text-sage-dark font-medium mb-2 tracking-wide text-sm uppercase">Step 2 of 3</p>
        <h1 className="font-serif text-3xl md:text-4xl text-sage-dark mb-3">
          Here's what we found
        </h1>
        <p className="max-w-xl mx-auto leading-relaxed">
          Tap any item to see more detail, and check it off once it's handled.
          Your progress is tracked below.
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-sage-dark">{resolvedCount} of {items.length} handled</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-white/60 rounded-full h-3 overflow-hidden border border-sage/20">
          <div
            className="bg-sage-dark h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className={`bg-white/60 border rounded-2xl overflow-hidden transition ${item.resolved ? 'border-sage/40 opacity-60' : 'border-sage/20'}`}
            >
              <div
                onClick={() => toggleExpand(index)}
                className="flex items-center justify-between p-5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <button onClick={(e) => toggleResolved(index, e)}>
                    {item.resolved ? (
                      <CheckCircle2 size={22} className="text-sage-dark" />
                    ) : (
                      <Circle size={22} className="text-warm-gray/40" />
                    )}
                  </button>
                  <div className="bg-sage/10 p-3 rounded-xl text-sage-dark">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-warm-gray/60 mb-1">{item.type}</p>
                    <p className={`font-medium text-sage-dark ${item.resolved ? 'line-through' : ''}`}>{item.name}</p>
                    <p className="text-sm">{item.detail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${urgencyStyles[item.urgency]} whitespace-nowrap hidden md:inline`}>
                    {urgencyLabels[item.urgency]}
                  </span>
                  <ChevronDown size={20} className={`transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} />
                </div>
              </div>
              {expandedIndex === index && (
                <div className="px-5 pb-5 text-sm leading-relaxed border-t border-sage/10 pt-4">
                  {item.extra}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-12 flex items-start gap-3">
        <Info className="text-accent flex-shrink-0 mt-0.5" size={20} />
        <p className="text-sm leading-relaxed">
          <span className="font-medium text-sage-dark">Did you know? </span>
          As of 2024, banks in India are holding ₹78,213 crore in unclaimed deposits (RBI).
          The SBI PPF account above is exactly the kind of dormant asset families never discover — until it's too late.
        </p>
      </div>

      <div className="text-center">
        <Link
          to="/letters"
          className="bg-sage-dark text-cream px-8 py-4 rounded-full font-medium text-lg hover:bg-sage transition inline-flex items-center gap-2"
        >
          Generate closure letters
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  )
}