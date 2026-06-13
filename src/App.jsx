import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Mapper from './pages/Mapper'
import Letters from './pages/Letters'
import Timeline from './pages/Timeline'
import Family from './pages/Family'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/mapper" element={<Mapper />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/family" element={<Family />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App