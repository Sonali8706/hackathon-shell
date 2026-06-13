import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Mapper from './pages/Mapper'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/mapper" element={<Mapper />} />
        <Route path="/letters" element={<div className="text-center py-20">Coming soon</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App