import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadCloud, FileText, X, Sparkles } from 'lucide-react'

export default function Upload() {
  const [files, setFiles] = useState([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const navigate = useNavigate()

  function handleFiles(e) {
    const newFiles = Array.from(e.target.files)
    setFiles((prev) => [...prev, ...newFiles])
  }

  function removeFile(index) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  function handleAnalyze() {
    setIsAnalyzing(true)
    // Simulate AI processing time, then move to the next page
    setTimeout(() => {
      navigate('/mapper')
    }, 2000)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-warm-gray">
      <div className="text-center mb-10">
        <p className="text-sage-dark font-medium mb-2 tracking-wide text-sm uppercase">Step 1 of 3</p>
        <h1 className="font-serif text-3xl md:text-4xl text-sage-dark mb-3">
          Start with whatever you have
        </h1>
        <p className="max-w-xl mx-auto leading-relaxed">
          A death certificate, a bank statement, an insurance paper, even a photo of a passbook.
          You don't need to organize anything — just upload, and we'll take it from here.
        </p>
      </div>

      {/* Drop zone */}
      <label className="block border-2 border-dashed border-sage/40 rounded-2xl bg-white/50 p-12 text-center cursor-pointer hover:bg-white/70 transition mb-6">
        <UploadCloud className="mx-auto text-sage-dark mb-3" size={40} />
        <p className="font-medium text-sage-dark mb-1">Click to upload files</p>
        <p className="text-sm">PDF, images, or photos — any format works</p>
        <input type="file" multiple className="hidden" onChange={handleFiles} />
      </label>

      {/* Uploaded files list */}
      {files.length > 0 && (
        <div className="space-y-2 mb-8">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-white/60 border border-sage/20 rounded-xl px-4 py-3">
              <div className="flex items-center gap-3">
                <FileText className="text-sage-dark" size={20} />
                <span className="text-sm">{file.name}</span>
              </div>
              <button onClick={() => removeFile(index)} className="text-warm-gray hover:text-red-500 transition">
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Action button */}
      <div className="text-center">
        <button
          onClick={handleAnalyze}
          disabled={files.length === 0 || isAnalyzing}
          className="bg-sage-dark text-cream px-8 py-4 rounded-full font-medium text-lg hover:bg-sage transition disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <Sparkles className="animate-spin" size={20} />
              Analyzing your documents...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              Analyze with AI
            </>
          )}
        </button>
        {files.length === 0 && (
          <p className="text-xs mt-3 text-warm-gray/60">Upload at least one document to continue</p>
        )}
      </div>
    </div>
  )
}