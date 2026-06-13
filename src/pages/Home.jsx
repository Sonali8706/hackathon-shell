import { Link } from 'react-router-dom'
import { Upload, Map, FileText, Clock, Search, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="text-warm-gray">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
        <p className="text-sage-dark font-medium mb-4 tracking-wide text-sm uppercase">
          You don't have to do this alone
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-sage-dark leading-tight mb-6">
          We help families navigate <br /> what comes after loss
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          AfterCare AI reads your documents, understands your family's situation,
          and quietly handles the paperwork — closure letters, claims, deadlines —
          so you can focus on what matters.
        </p>
        <Link to="/upload" className="bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition shadow-lg shadow-accent/20 inline-block">
            Start with what you have
        </Link>
      </section>

      {/* Stats Section */}
      <section className="bg-sage-dark text-cream py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-serif text-4xl mb-2">400+ hrs</p>
            <p className="text-cream/80 text-sm">spent by families navigating paperwork alone</p>
          </div>
          <div>
            <p className="font-serif text-4xl mb-2">$58B</p>
            <p className="text-cream/80 text-sm">in unclaimed assets sitting undiscovered</p>
          </div>
          <div>
            <p className="font-serif text-4xl mb-2">700%</p>
            <p className="text-cream/80 text-sm">spike in identity theft after a loss</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-sage-dark text-center mb-4">
          One quiet place for everything
        </h2>
        <p className="text-center max-w-xl mx-auto mb-16">
          Upload what you have. AfterCare AI figures out the rest — and acts on it.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Upload size={28} />}
            title="Guided Onboarding"
            description="No overwhelming forms. Just upload a death certificate, bank statement, or even a photo — we take it from there."
          />
          <FeatureCard
            icon={<Map size={28} />}
            title="AI Estate Mapper"
            description="A visual map of every account, asset, and subscription we find — color-coded by urgency."
          />
          <FeatureCard
            icon={<FileText size={28} />}
            title="AI Document Generator"
            description="One click creates a legally appropriate closure letter for any institution, ready to send."
          />
          <FeatureCard
            icon={<Clock size={28} />}
            title="Deadline Tracker"
            description="Every legal deadline explained simply — what it means, and what happens if it's missed."
          />
          <FeatureCard
            icon={<Search size={28} />}
            title="Hidden Asset Discovery"
            description="We flag dormant accounts and forgotten policies families routinely never find."
          />
          <FeatureCard
            icon={<Users size={28} />}
            title="Family Collaboration"
            description="Add family members, assign tasks, and track progress together — nothing falls through the cracks."
          />
        </div>
      </section>

    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/60 border border-sage/20 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition">
      <div className="text-sage-dark mb-4">{icon}</div>
      <h3 className="font-serif text-xl text-sage-dark mb-2">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
}