import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Upload, Map, FileText, Clock, Search, Users, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'

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
        <h1 className="font-serif text-4xl md:text-6xl text-sage-dark leading-tight mb-6 relative">
          We help families navigate <br /> what comes after loss
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed relative">
          AfterCare AI reads your documents, understands your family's situation,
          and quietly handles the paperwork — closure letters, claims, deadlines —
          so you can focus on what matters.
        </p>
        <Link to="/upload" className="bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition shadow-lg shadow-accent/20 inline-block relative">
          Start with what you have
        </Link>
      </section>

      {/* Stats Section */}
      <section className="bg-sage-dark text-cream py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <StatCard target={400} suffix="+ hrs" label="spent by families navigating paperwork alone" />
          <StatCard prefix="₹" target={78213} suffix=" Cr" label="in unclaimed bank deposits across India (RBI, 2024)" />
          <StatCard target={700} suffix="%" label="spike in identity theft after a loss" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sage-dark font-medium mb-3 tracking-wide text-sm uppercase">What AfterCare AI Does</p>
          <h2 className="font-serif text-3xl md:text-4xl text-sage-dark mb-4">
            One quiet place for everything
          </h2>
          <p className="max-w-xl mx-auto leading-relaxed">
            Upload what you have. AfterCare AI figures out the rest — and acts on it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Upload size={26} />}
            title="Guided Onboarding"
            description="No overwhelming forms. Just upload a death certificate, bank statement, or even a photo — we take it from there."
            tag="Step 1"
            delay={0}
          />
          <FeatureCard
            icon={<Map size={26} />}
            title="AI Estate Mapper"
            description="A visual map of every account, asset, and subscription we find — color-coded by urgency, with progress you can track."
            tag="Step 2"
            delay={0.1}
          />
          <FeatureCard
            icon={<FileText size={26} />}
            title="AI Document Generator"
            description="One click creates a legally appropriate closure letter for any institution, ready to download and send."
            tag="Step 3"
            delay={0.2}
          />
          <FeatureCard
            icon={<Clock size={26} />}
            title="Deadline Tracker"
            description="Every legal deadline explained simply — what it means, and what happens if it's missed."
            tag="Core"
            delay={0.3}
          />
          <FeatureCard
            icon={<Search size={26} />}
            title="Hidden Asset Discovery"
            description="We flag dormant accounts and forgotten policies families routinely never find — a real ₹78,213 Cr problem in India alone."
            tag="Unique"
            delay={0.4}
          />
          <FeatureCard
            icon={<Users size={26} />}
            title="Family Collaboration"
            description="Add family members, assign tasks, and track progress together — nothing falls through the cracks."
            tag="Core"
            delay={0.5}
          />
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

      {/* MAIN CTA — the "this product actually does something" moment */}
      <section className="bg-sage-dark text-cream py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-cream/10 border border-cream/20 rounded-full px-4 py-1.5 mb-6 text-sm">
            <Sparkles size={16} className="text-accent" />
            Powered by AI — try it yourself
          </div>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
            Upload one document. <br /> Watch AfterCare AI take it from there.
          </h2>
          <p className="text-cream/80 max-w-xl mx-auto mb-10 leading-relaxed">
            In under a minute, see your accounts mapped by urgency, a legal closure
            letter drafted for you, and a deadline timeline built — automatically.
          </p>
          <Link
            to="/upload"
            className="bg-accent text-white px-10 py-5 rounded-full font-medium text-lg hover:opacity-90 transition shadow-2xl shadow-accent/30 inline-flex items-center gap-2"
          >
            Get Started — Try AfterCare AI
            <ArrowRight size={22} />
          </Link>
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

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let startTime = null
        function animate(timestamp) {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / duration, 1)
          setCount(Math.floor(progress * target))
          if (progress < 1) requestAnimationFrame(animate)
          else setCount(target)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.3 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return [count, ref]
}

function StatCard({ prefix = '', target, suffix = '', label }) {
  const [count, ref] = useCountUp(target)
  return (
    <div ref={ref}>
      <p className="font-serif text-4xl mb-2">{prefix}{count.toLocaleString('en-IN')}{suffix}</p>
      <p className="text-cream/80 text-sm">{label}</p>
    </div>
  )
}

function FeatureCard({ icon, title, description, tag, delay = 0 }) {
  return (
    <div
      className="group bg-white rounded-2xl p-8 border border-sage/15 hover:border-accent/50 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-14 h-14 rounded-xl bg-sage/10 flex items-center justify-center text-sage-dark group-hover:bg-sage-dark group-hover:text-cream transition-colors duration-300">
          {icon}
        </div>
        {tag && (
          <span className="text-[11px] font-medium uppercase tracking-wider text-accent border border-accent/30 rounded-full px-3 py-1">
            {tag}
          </span>
        )}
      </div>
      <h3 className="font-serif text-xl text-sage-dark mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-warm-gray">{description}</p>
    </div>
  )
}