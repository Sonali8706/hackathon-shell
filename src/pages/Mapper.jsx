import { Link } from 'react-router-dom'
import { Landmark, ShieldCheck, FileSignature, Repeat, AlertTriangle, ArrowRight } from 'lucide-react'

const discoveredItems = [
  { type: 'Bank Account', name: 'HDFC Savings Account', detail: 'Balance: ₹4,82,300', urgency: 'high', icon: Landmark },
  { type: 'Insurance Policy', name: 'LIC Life Insurance', detail: 'Claim amount: ₹10,00,000', urgency: 'high', icon: ShieldCheck },
  { type: 'Property', name: 'Residential Flat, Pune', detail: 'Requires probate filing', urgency: 'medium', icon: FileSignature },
  { type: 'Subscription', name: 'Netflix, Spotify, Amazon Prime', detail: '3 active subscriptions found', urgency: 'low', icon: Repeat },
  { type: 'Dormant Account', name: 'SBI PPF Account', detail: 'Possibly forgotten — last activity 4 years ago', urgency: 'high', icon: AlertTriangle },
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
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-warm-gray">
      <div className="text-center mb-10">
        <p className="text-sage-dark font-medium mb-2 tracking-wide text-sm uppercase">Step 2 of 3</p>
        <h1 className="font-serif text-3xl md:text-4xl text-sage-dark mb-3">
          Here's what we found
        </h1>
        <p className="max-w-xl mx-auto leading-relaxed">
          Based on the documents you uploaded, AfterCare AI has mapped out the
          estate. Items are sorted by how soon they need attention.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {discoveredItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex items-center justify-between bg-white/60 border border-sage/20 rounded-2xl p-5">
              <div className="flex items-center gap-4">
                <div className="bg-sage/10 p-3 rounded-xl text-sage-dark">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-warm-gray/60 mb-1">{item.type}</p>
                  <p className="font-medium text-sage-dark">{item.name}</p>
                  <p className="text-sm">{item.detail}</p>
                </div>
              </div>
              <span className={`text-xs font-medium px-3 py-1 rounded-full border ${urgencyStyles[item.urgency]} whitespace-nowrap`}>
                {urgencyLabels[item.urgency]}
              </span>
            </div>
          )
        })}
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