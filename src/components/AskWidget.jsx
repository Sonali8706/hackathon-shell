import { useState } from 'react'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'

const faq = [
  { keywords: ['deadline', 'time', 'urgent', 'when'], answer: "Most banks require death intimation within 7 days, and insurance claims should be filed within 30 days. Check your Deadline Tracker page for a full breakdown specific to your situation." },
  { keywords: ['letter', 'draft', 'write', 'closure'], answer: "Head to the Document Generator page — choose the institution (bank, insurance, property office, or subscription), and AfterCare AI will draft a ready-to-send letter for you." },
  { keywords: ['hidden', 'dormant', 'unclaimed', 'forgotten'], answer: "AfterCare AI scans your uploaded documents for accounts with no recent activity. In India alone, ₹78,213 crore sits unclaimed in banks (RBI, 2024) — often forgotten PPF or savings accounts." },
  { keywords: ['family', 'member', 'help', 'collaborate'], answer: "You can invite family members from the Family Workspace page. Each person gets assigned tasks, and everyone can see what's done and what's pending." },
  { keywords: ['upload', 'document', 'file'], answer: "You can upload anything — a bank statement, insurance paper, property deed, or even a photo of a passbook. No need to organize anything beforehand." },
  { keywords: ['secure', 'safe', 'privacy', 'data'], answer: "Your documents are processed securely and never shared without consent. Privacy is core to how AfterCare AI is built." },
]

const fallback = "I'm here to help with anything related to accounts, documents, deadlines, or family tasks. Try asking about 'deadlines', 'hidden accounts', or 'closure letters'."

export default function AskWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { from: 'ai', text: "Hi, I'm AfterCare AI. Ask me anything about your estate, deadlines, or documents." },
  ])

  function handleSend(e) {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { from: 'user', text: input }
    const lower = input.toLowerCase()
    const match = faq.find((item) => item.keywords.some((kw) => lower.includes(kw)))
    const aiMessage = { from: 'ai', text: match ? match.answer : fallback }

    setMessages((prev) => [...prev, userMessage, aiMessage])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 bg-white rounded-2xl border border-sage/20 shadow-xl overflow-hidden animate-fade-in-up flex flex-col" style={{ maxHeight: '420px' }}>
          <div className="bg-sage-dark text-cream px-4 py-3 flex items-center gap-2">
            <Sparkles size={18} />
            <span className="font-medium text-sm">AfterCare AI Assistant</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm" style={{ minHeight: '180px' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl leading-relaxed ${
                  msg.from === 'ai'
                    ? 'bg-sage/10 text-warm-gray'
                    : 'bg-sage-dark text-cream ml-auto'
                }`}
                style={{ maxWidth: '85%', marginLeft: msg.from === 'user' ? 'auto' : '0' }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="border-t border-sage/10 p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-cream rounded-full px-4 py-2 text-sm outline-none border border-sage/20"
            />
            <button type="submit" className="bg-sage-dark text-cream p-2 rounded-full hover:bg-sage transition">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-sage-dark text-cream w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-sage transition hover:scale-105"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}