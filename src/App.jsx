import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Designers from './pages/Designers'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designers" element={<Designers />} />
      </Routes>
    </BrowserRouter>
  )
}
