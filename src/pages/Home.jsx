import { ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Upload, Map, FileText, Clock, Search, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="text-warm-gray">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 text-center relative overflow-hidden animate-fade-in">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-sage/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl pointer-events-none"></div>

        <p className="text-sage-dark font-medium mb-4 tracking-wide text-sm uppercase relative">
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
            <p className="font-serif text-4xl mb-2">₹78,213 Cr</p>
            <p className="text-cream/80 text-sm">in unclaimed bank deposits across India (RBI, 2024)</p>
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
            <FeatureCard icon={<Upload size={28} />} title="Guided Onboarding" description="..." delay={0} />
            <FeatureCard icon={<Map size={28} />} title="AI Estate Mapper" description="..." delay={0.1} />
            <FeatureCard icon={<FileText size={28} />} title="AI Document Generator" description="..." delay={0.2} />
            <FeatureCard icon={<Clock size={28} />} title="Deadline Tracker" description="..." delay={0.3} />
            <FeatureCard icon={<Search size={28} />} title="Hidden Asset Discovery" description="..." delay={0.4} />
            <FeatureCard icon={<Users size={28} />} title="Family Collaboration" description="..." delay={0.5} />
        </div>
      </section>
        {/* How It Works Section */}
      <section id="how" className="bg-sage/10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-sage-dark text-center mb-16">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-14 h-14 rounded-full bg-sage-dark text-cream flex items-center justify-center font-serif text-xl mx-auto mb-4">1</div>
              <h3 className="font-serif text-lg text-sage-dark mb-2">Upload anything you have</h3>
              <p className="text-sm leading-relaxed">A death certificate, a bank passbook photo, an insurance file — whatever's available.</p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-sage-dark text-cream flex items-center justify-center font-serif text-xl mx-auto mb-4">2</div>
              <h3 className="font-serif text-lg text-sage-dark mb-2">AI maps your situation</h3>
              <p className="text-sm leading-relaxed">We identify every account, asset, and deadline — even ones you didn't know existed.</p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-sage-dark text-cream flex items-center justify-center font-serif text-xl mx-auto mb-4">3</div>
              <h3 className="font-serif text-lg text-sage-dark mb-2">We act on it with you</h3>
              <p className="text-sm leading-relaxed">Letters drafted, deadlines tracked, and your family kept in sync — every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <ShieldCheck className="text-sage-dark mx-auto mb-4" size={36} />
        <h2 className="font-serif text-2xl md:text-3xl text-sage-dark mb-4">
          Built with care, and with privacy in mind
        </h2>
        <p className="leading-relaxed">
          We know what you're uploading is deeply personal. Documents are used
          only to help your family — never sold, never shared, and you're always
          in control of what's stored.
        </p>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <div
      className="bg-white/60 border border-sage/20 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-sage-dark mb-4">{icon}</div>
      <h3 className="font-serif text-xl text-sage-dark mb-2">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
}