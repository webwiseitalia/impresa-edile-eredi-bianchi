import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Servizi from './pages/Servizi'
import Lavori from './pages/Lavori'
import Contatti from './pages/Contatti'
import Privacy from './pages/Privacy'
import Cookie from './pages/Cookie'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/lavori" element={<Lavori />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie" element={<Cookie />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
