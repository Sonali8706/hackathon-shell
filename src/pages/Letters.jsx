import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Download, Sparkles, ArrowRight } from 'lucide-react'

const institutions = ['HDFC Bank', 'LIC Insurance', 'Sub-Registrar Office (Property)', 'Netflix Subscription']

const letterTemplates = {
  'HDFC Bank': `To,
The Branch Manager,
HDFC Bank, Pune Branch

Subject: Request for Closure of Account Due to Demise of Account Holder

Dear Sir/Madam,

I am writing to inform you of the demise of [Account Holder Name], holder of Savings Account ending in XXXX, on [Date of Demise]. As the legal heir/nominee, I am submitting this request along with the death certificate and required identification documents to initiate the closure process and transfer of remaining balance.

Kindly guide me on any additional documentation required and the expected timeline for processing.

Respectfully,
[Your Name]
[Relationship to Deceased]`,

  'LIC Insurance': `To,
The Claims Department,
Life Insurance Corporation of India

Subject: Intimation of Death and Request to Initiate Claim Settlement

Dear Sir/Madam,

This is to formally notify you of the passing of [Policy Holder Name], holder of Policy No. [XXXXXXXX], on [Date of Demise]. As the nominee under this policy, I request that the claim settlement process be initiated at the earliest.

Enclosed are the death certificate, policy document, and identity proof as required.

Respectfully,
[Your Name]
Nominee`,

  'Sub-Registrar Office (Property)': `To,
The Sub-Registrar,
[Office Location]

Subject: Application for Mutation of Property Records Following Demise of Owner

Dear Sir/Madam,

I am writing to request the mutation of property records for the property located at [Property Address], previously registered under the name of [Deceased Owner Name], who passed away on [Date of Demise].

I am submitting the death certificate, succession documents, and identity proof in support of this application.

Respectfully,
[Your Name]
[Relationship to Deceased]`,

  'Netflix Subscription': `Subject: Account Closure Request — Subscriber Deceased

To the Netflix Support Team,

I am writing to request the cancellation of the account registered under [Email Address], belonging to [Account Holder Name], who passed away on [Date of Demise].

Please confirm cancellation of all active subscriptions and billing under this account.

Thank you,
[Your Name]`,
}

export default function Letters() {
  const [selected, setSelected] = useState('')
  const [generatedText, setGeneratedText] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  function handleGenerate() {
    if (!selected) return
    setIsGenerating(true)
    setGeneratedText('')

    const fullText = letterTemplates[selected]
    let index = 0

    const interval = setInterval(() => {
      setGeneratedText(fullText.slice(0, index))
      index += 4
      if (index > fullText.length) {
        clearInterval(interval)
        setIsGenerating(false)
      }
    }, 10)
  }

  function handleDownload() {
    const blob = new Blob([generatedText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${selected.replace(/\s+/g, '_')}_letter.txt`
    a.click()
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-warm-gray">
      <div className="text-center mb-10">
        <p className="text-sage-dark font-medium mb-2 tracking-wide text-sm uppercase">Step 3 of 3</p>
        <h1 className="font-serif text-3xl md:text-4xl text-sage-dark mb-3">
          Let AI draft the letter for you
        </h1>
        <p className="max-w-xl mx-auto leading-relaxed">
          Choose where the letter needs to go. AfterCare AI will draft a legally
          appropriate notice, pre-filled and ready to send.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="flex-1 bg-white/70 border border-sage/30 rounded-xl px-4 py-3 text-sage-dark"
        >
          <option value="">Select an institution...</option>
          {institutions.map((inst) => (
            <option key={inst} value={inst}>{inst}</option>
          ))}
        </select>
        <button
          onClick={handleGenerate}
          disabled={!selected || isGenerating}
          className="bg-sage-dark text-cream px-6 py-3 rounded-xl font-medium hover:bg-sage transition disabled:opacity-40 flex items-center justify-center gap-2"
        >
          <Sparkles size={18} className={isGenerating ? 'animate-spin' : ''} />
          {isGenerating ? 'Drafting...' : 'Generate Letter'}
        </button>
      </div>

      {generatedText && (
        <div className="bg-white/70 border border-sage/20 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sage-dark">
              <FileText size={18} />
              <span className="font-medium text-sm">{selected} — Closure Letter</span>
            </div>
            {!isGenerating && (
              <button onClick={handleDownload} className="text-sage-dark hover:text-accent transition flex items-center gap-1 text-sm font-medium">
                <Download size={16} /> Download
              </button>
            )}
          </div>
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-warm-gray">{generatedText}</pre>
        </div>
      )}

      <div className="text-center">
        <Link to="/timeline" className="bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition inline-flex items-center gap-2">
          View deadline timeline
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  )
}